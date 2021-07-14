export default class ProjectController {
  async project(req, res) {
    res.send({ ok: true, user: req.userId })
  }
}
