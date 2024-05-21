import { connectToDB } from "@/config/dbConnection";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
      await connectToDB();
      const reqBody = await request.json();
    //   const { error } = archivedFormValidate(reqBody);
      if (error) {
        return NextResponse.json(
          {
            success: false,
            message: error.message,
          },
          {
            status: 203,
          }
        );
      }
      let { formId, isArchived } = reqBody;
     
      return NextResponse.json(
        {
          success: true,
          message: "Form successfully archived.",
        },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        {
          error: error.message,
          success: false,
          message: "Something went wrong, please try agian!",
        },
        { status: 500 }
      );
    }
  };
  