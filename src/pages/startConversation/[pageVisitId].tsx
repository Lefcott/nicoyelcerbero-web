import Layout from "@/components/Layout/index";
import "@/sockets/conversationSocket";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { createConversation } from "@/services/api/conversations";
import { useMessagesStore } from "@/store/messages";

export default function Conversation({ show }) {
  const firstRenderRef = useRef(true);
  const { query, push } = useRouter();

  useEffect(() => {
    firstRenderRef.current = false;
  }, []);

  useEffect(() => {
    if (query.pageVisitId) {
      useMessagesStore.setState({
        chatToken: query.chatToken as string,
      });
      createConversation(query.pageVisitId as string).then((response) => {
        push(
          `/conversations/${response.data.conversationId}?chatToken=${query.chatToken}`
        );
      });
    }
  }, [query.pageVisitId]);

  return (
    <>
      <Head>
        <title>Ácidamente - Conversación</title>
      </Head>
      <Layout>Creando conversación...</Layout>
    </>
  );
}
