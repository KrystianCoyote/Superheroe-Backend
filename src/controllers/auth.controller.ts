import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';

export const register = async (req: Request, res: Response) => {
  const { nombre, email, password } = req.body;
  try {
    // 1. Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // 2. Insertar usando el Modelo para activar el jsonSchema
    const newUser = await User.query().insert({
      nombre,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "Usuario registrado con éxito",
      userId: newUser.id
    });
  } catch (error: any) {
    res.status(400).json({
      error: "Datos inválidos o el usuario ya existe",
      details: error.message
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.query().findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const secret = process.env.JWT_SECRET || 'secret_key';
    const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });

    res.json({
      token,
      nombre: user.nombre
    });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor al intentar iniciar sesión." });
  }
};

export const getProfile = async (req: any, res: Response) => {
  try {
    // Buscamos al usuario por el ID que el Middleware extrajo del Token
    const user = await User.query().findById(req.userId).select('id', 'nombre', 'email', 'role');

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el perfil del usuario." });
  }
};