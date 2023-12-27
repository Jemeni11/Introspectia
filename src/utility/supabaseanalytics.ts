import nookies from "nookies";
import { supabaseClient } from "../utility";
import { useList } from "@refinedev/core";

export const getUsersJournalEntries = (user_id: string) =>
  useList({
    resource: "journal_entries",
    // sorters: [
    //   {
    //     field: "created_at",
    //     order: "desc",
    //   },
    // ],
    // filters: [{ field: "user_id", operator: "eq", value: user_id }],
  });

// export const getUserData = async() => {
//   const { token } = nookies.get();
//   const { data } = await supabaseClient.auth.getUser(token);
//   const { user } = data;
//   return user
// }