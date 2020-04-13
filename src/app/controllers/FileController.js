import File from '../models/File';

class FileController {
  async store(request, response) {
    const { originalname: nome, filename: path } = request.file;

    const file = await File.create({
      nome,
      path,
    });

    return response.json(file);
  }
}

export default new FileController();
