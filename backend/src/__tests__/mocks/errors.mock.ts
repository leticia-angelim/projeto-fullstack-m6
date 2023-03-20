export default {
  missingBearer: {
    error: { message: "Missing authorization headers" },
    status: 401,
  },
  invalidSignature: { error: { message: "Invalid token" }, status: 401 },
  jwtMalformed: { error: { message: "Invalid token" }, status: 401 },
  forbidden: { error: { message: "Insufficient permission" }, status: 403 },
  notFound: {
    user: { error: { message: "User not found" }, status: 404 },
    category: { error: { message: "Category not found" }, status: 404 },
    realEstate: { error: { message: "RealEstate not found" }, status: 404 },
  },
};