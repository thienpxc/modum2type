
// import * as jose from "jose";
// interface Data {
//   id: number;
//   name: string;
//   age: number;
// }
// export default function App() {
//   let data: Data = {
//     id: 1,
//     name: "Phuoc",
//     age: 30,
//   };

//   async function generateToken(data: any) {
//     const jwt = await new jose.SignJWT(data)
//       .setProtectedHeader({ alg: "HS256" })
//       .sign(new TextEncoder().encode("ntbphuoc"));
//     return jwt;
//   }

//   generateToken(data)
//   .then(res => {
//     console.log("res", res)
//   })

//   async function verifyToken(token: string, key: string) {
//     try {
//       const { payload } = await jose.jwtVerify(
//         token,
//         new TextEncoder().encode(key)
//       );
//       return payload;
//     } catch (error) {
//       return null;
//     }
//   }

//   verifyToken(
//     "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlBodW9jIiwiYWdlIjozMH0.nfViOTwfUsi-F4T5_mRHX9LARdSO1UM_lJbllaVsthc",
//     "ntbphuoc"
//   ).then((payload) => {
//     console.log("payload", payload);
//   });

  
// }
