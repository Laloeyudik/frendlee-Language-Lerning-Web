import User from "../models/UserModels.js";

export const verifyStudent = async (req, res, next) => {
  if (!req.session.studentId) {
    return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
  }
  const student = await User.findOne({
    where: {
      uuid: req.session.studentId,
    },
  });
  if (!student) return res.status(404).json({ msg: "User tidak ditemukan" });
  req.role = student.role;
  next();
};
export const verifyTeacher = async (req, res, next) => {
  if (!req.session.teacherId) {
    return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
  }
  const teacher = await User.findOne({
    where: {
      uuid: req.session.teacherId,
    },
  });
  if (!teacher) return res.status(404).json({ msg: "User tidak ditemukan" });
  req.teacherId = teacher.id;
  req.role = teacher.role;
  next();
};
