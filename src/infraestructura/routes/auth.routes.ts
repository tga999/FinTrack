import { Router } from 'express'
import { registro, login, me } from '../controllers/auth.controller'
import { verificarToken, RequestConUsuario } from '../middlewares/auth.middleware'


const router = Router()

//Rutas de autenticación
router.post('/registro', registro)
router.post('/login',login)

//Ruta protegida

router.get('/perfil', verificarToken, (req: RequestConUsuario, res) => {
    res.json({mensaje: 'Ruta protegida', usuarioId: req.usuarioId})
})
router.get('/me', verificarToken, me)

export default router

