export const resources = {
  en: {
    default: {},
    composer: {
      send_message_placeholder: "Adicione um comentário...",
      reply_placeholder: "Responder...",
      edit_message_placeholder: "Editar mensagem...",
      mention_someone_tooltip: "Mencione alguém",
      annotate_action: "Anotar",
      replace_annotation_tooltip: "Substituir anotação",
      add_emoji_tooltip: "Adicionar emoji",
      remove_task_tooltip: "Remover tarefa",
      create_task_tooltip: "Criar tarefa",
      attach_file_tooltip: "Anexar arquivo",
      remove_file_action: "Remover",
      connect_to_slack_action: "Conecte sua equipe do Slack",
      slack_follow_instructions: "Siga as instruções",
      editing_status: "Edição",
      cancel_editing_action: "Cancelar",
      resolved_status: "Resolvido",
      unresolve_action: "Reabrir para responder",
      annotation: "Sua anotação",
      remove_annotation_action: "Remover",
      send_message_action_failure: "Falha no envio da mensagem. ",
      drag_and_drop_files_tooltip: "Soltar arquivos",
      attach_file_action_failure: "Falha ao carregar o arquivo: {{message}}"
    },
    thread: {
      placeholder_title: "Converse com sua equipe, aqui mesmo",
      placeholder_body: "Faça uma pergunta, dê feedback ou apenas diga 'Oi'. ",
      new_status: "Novo",
      reply_action: "Responder...",
      mark_as_read_action: "marcar como Lido",
      share_via_slack_action: "Compartilhe com o Slack",
      share_via_slack_channel_action: "Compartilhar com #{{slackChannel}}",
      share_via_slack_action_not_connected: "Conecte-se para compartilhar",
      share_via_slack_action_success: "Compartilhado com #{{slackChannel}}",
      share_via_slack_channel_placeholder: "Digite ou selecione",
      share_via_slack_no_channels: "Nenhum canal público encontrado",
      share_via_slack_action_failure: "Erro ao compartilhar no Slack. Tente novamente",
      share_via_email_action: "Compartilhar por e-mail",
      share_via_email_button_action: "$t(share_via_email_action)",
      share_via_email_header: "$t(share_via_email_action)",
      share_via_email_action_success: "Compartilhado com {{email}}",
      share_via_email_screenshot_warning: "Uma captura de tela desta página será incluída no e-mail.",
      share_via_email_placeholder: "email@email.com",
      subscribe_action: "Se inscrever",
      subscribe_action_success: "Você se inscreveu neste tópico",
      unsubscribe_action: "Cancelar subscrição",
      unsubscribe_action_success: "Você cancelou a inscrição neste tópico",
      resolve_action: "Resolver",
      resolve_action_success: "Você resolveu este tópico",
      resolved_status: "Resolvido",
      unresolve_action: "Reabrir",
      unresolve_action_success: "Você reabriu este tópico",
      collapse_action: "Recolher tópico",
      typing_users_status: "Digitando",
      new_replies_status_one: "1 não lido",
      new_replies_status_many: "{{count}} Não lida",
      new_replies_status_other: "{{count}} Não lida",
      replies_status_one: "1 resposta",
      replies_status_many: "{{count}} respostas",
      replies_status_other: "{{count}} respostas",
      show_more_one: "Mostrar mais 1",
      show_more_many: "Mostrar {{count}} mais",
      show_more_other: "Mostrar {{count}} mais"
    },
    thread_list: {
      placeholder_title: "Seja o primeiro a adicionar um comentário",
      placeholder_body: "Faça uma pergunta, dê feedback ou apenas diga 'Oi'. ",
      show_resolved_threads_action: "Mostrar tópicos resolvidos",
      hide_resolved_threads_action: "Ocultar tópicos resolvidos"
    },
    thread_preview: {
      hide_replies_action: "Ocultar respostas",
      reply_action: "Responder",
      show_replies_action_read_one: "1 resposta",
      show_replies_action_read_many: "{{count}} respostas",
      show_replies_action_read_other: "{{count}} respostas",
      show_replies_action_unread_one: "1 nova resposta",
      show_replies_action_unread_many: "{{count}} novas respostas",
      show_replies_action_unread_other: "{{count}} novas respostas"
    },
    threaded_comments: {
      placeholder_title: "Seja o primeiro a adicionar um comentário",
      placeholder_body: "Faça uma pergunta, dê feedback ou apenas diga 'Oi'. ",
      resolved_placeholder_title: "É aqui que os comentários resolvidos aparecerão",
      resolved_placeholder_body: "Os comentários resolvidos podem ser vistos por qualquer pessoa que possa acessar esta página.",
      show_unresolved: "Abrir",
      show_resolved: "Resolvido",
      show_resolved_threads_action: "$t(thread_list:show_resolved_threads_action)",
      hide_resolved_threads_action: "$t(thread_list:hide_resolved_threads_action)",
      load_more_action: "Carregue mais",
      hide_replies_action: "Ocultar respostas",
      show_more_replies_action: "Mostre mais",
      reply_action: "Responder",
      resolved_status: "$t(thread:resolved_status)",
      unresolve_action: "$t(thread:unresolve_action)",
      show_replies_action_read_one: "1 resposta",
      show_replies_action_read_many: "{{count}} respostas",
      show_replies_action_read_other: "{{count}} respostas",
      show_replies_action_unread_one: "1 nova resposta",
      show_replies_action_unread_many: "{{count}} novas respostas",
      show_replies_action_unread_other: "{{count}} novas respostas"
    },
    message: {
      download_action: "Download",
      unable_to_display_document: "Não é possível exibir o documento",
      unable_to_display_image: "Não foi possível exibir a imagem",
      editing_status: "(Edição)",
      edited_status: "(Editado)",
      edit_action: "Editar",
      edit_resolved_action: "Reabrir para editar",
      delete_action: "Excluir",
      deleted_message: "{{user.displayName}} excluiu uma mensagem",
      sent_via_slack_tooltip: "Enviado via Slack",
      sent_via_email_tooltip: "Enviado por e-mail",
      undo_delete_action: "Desfazer",
      add_reaction_action: "Adicionar reação",
      message_options_tooltip: "Opções",
      screenshot_loading_status: "Carregando",
      screenshot_missing_status: "Nenhuma captura de tela encontrada",
      screenshot_expand_action: "Imagem",
      screenshot_expand_tooltip: "Clique para expandir",
      seen_by_status: "Visto por {{users, list(style: short)}}",
      image_modal_copy_link_action: "Link",
      image_modal_copy_link_tooltip: "Clique para copiar",
      image_modal_copy_link_success: "Copiado para a área de transferência",
      image_modal_blurred_status: "Conteúdo potencialmente confidencial foi desfocado",
      image_modal_annotation_header: "{{user.displayName}} anotou isso <datespan>sobre {{date}}</datespan>",
      image_modal_attachment_header: "{{user.displayName}} anexei isto <datespan>sobre {{date}}</datespan>",
      image_modal_header_date_format: "D MMM [às] h:mm A",
      timestamp: {
        in_less_than_a_minute: "em menos de um minuto",
        just_now: "agora mesmo",
        yesterday_format: "[ontem]",
        last_week_format: "ddd",
        tomorrow_format: "[amanhã]",
        next_week_format: "ddd",
        this_year_format: "MMM D",
        other_format: "MMM D, AAAA",
        in_minutes_one: "em 1 minuto",
        in_minutes_many: "em {{count}} minutos",
        in_minutes_other: "em {{count}} minutos",
        minutes_ago_one: "1 minuto atrás",
        minutes_ago_many: "{{count}} minutos atrás",
        minutes_ago_other: "{{count}} minutos atrás",
        in_hours_one: "em 1 hora",
        in_hours_many: "em {{count}} horas",
        in_hours_other: "em {{count}} horas",
        hours_ago_one: "1 hora atrás",
        hours_ago_many: "{{count}} horas atrás",
        hours_ago_other: "{{count}} horas atrás"
      },
      absolute_timestamp: {
        today_format: "h: mm A",
        yesterday_format: "MMM D",
        last_week_format: "MMM D",
        tomorrow_format: "MMM D",
        next_week_format: "MMM D",
        this_year_format: "MMM D",
        other_format: "MMM D, AAAA",
        tooltip: "{{date, datetime(dateStyle: short; timeStyle: medium)}}"
      },
      deleted_messages_one: "{{user.displayName}} excluiu uma mensagem",
      deleted_messages_many: "{{user.displayName}} excluído {{count}} mensagens",
      deleted_messages_other: "{{user.displayName}} excluído {{count}} mensagens",
      seen_by_status_overflow_one: "Visto por {{users, list(style: narrow)}}e mais 1",
      seen_by_status_overflow_many: "Visto por {{users, list(style: narrow)}}, e {{count}} outros",
      seen_by_status_overflow_other: "Visto por {{users, list(style: narrow)}}, e {{count}} outros",
      reaction_with_emoji_name_tooltip_one: "{{users, list(style: narrow)}} reagiu com {{emojiName}}",
      reaction_with_emoji_name_tooltip_many: "{{users, list(style: narrow)}} reagiu com {{emojiName}}",
      reaction_with_emoji_name_tooltip_other: "{{users, list(style: narrow)}} reagiu com {{emojiName}}",
      reaction_with_emoji_name_including_viewer_tooltip_one: "{{users, list(style: narrow)}} reagiu com {{emojiName}}",
      reaction_with_emoji_name_including_viewer_tooltip_many: "{{users, list(style: narrow)}} reagiu com {{emojiName}}",
      reaction_with_emoji_name_including_viewer_tooltip_other: "{{users, list(style: narrow)}} reagiu com {{emojiName}}"
    },
    message_templates: {
      cord: {
        thread_resolved: [
          {
            type: "p",
            children: [
              {
                type: "menção",
                user: {
                  id: "{{mention1.userID}}"
                },
                children: [
                  {
                    text: "{{mention1.text}}"
                  }
                ]
              },
              {
                text: " resolvi esse tópico"
              }
            ]
          }
        ],
        thread_unresolved: [
          {
            type: "p",
            children: [
              {
                type: "menção",
                user: {
                  id: "{{mention1.userID}}"
                },
                children: [
                  {
                    text: "{{mention1.text}}"
                  }
                ]
              },
              {
                text: " reabriu este tópico"
              }
            ]
          }
        ]
      }
    },
    sidebar: {
      add_comment_action: "Adicionar comentário",
      add_comment_instruction: "Adicione seu comentário",
      close_sidebar_tooltip: "Fechar",
      close_settings_tooltip: "Fechar",
      inbox_tooltip: "Todas as atualizações",
      thread_options_menu: "Opções",
      thread_list_title: "Comentários",
      return_to_list_action: "Todos",
      annotation_nudge: "Por que nao tentar <l>anotando parte da página</l>?"
    },
    notifications: {
      notifications_title: "Notificações",
      mark_all_as_read_action: "marcar tudo como lido",
      mark_as_read_action: "marcar como Lido",
      mark_as_unread_action: "marcar como não lido",
      delete_action: "Excluir notificação",
      empty_state_title: "Vocês estão todos em dia",
      empty_state_body: "Quando alguém @mencionar você ou responder aos seus comentários, avisaremos você aqui.",
      notification_options_tooltip: "Opções",
      timestamp: {
        in_less_than_a_minute: "Em menos de um minuto",
        just_now: "Agora mesmo",
        yesterday_format: "[Ontem às] h:mma",
        last_week_format: "ddd",
        tomorrow_format: "[Amanhã às] h:mma",
        next_week_format: "ddd",
        this_year_format: "MMM D, AAAA",
        other_format: "MMM D, AAAA",
        in_minutes_one: "Em 1 minuto",
        in_minutes_many: "Em {{count}} minutos",
        in_minutes_other: "Em {{count}} minutos",
        minutes_ago_one: "1 minuto atrás",
        minutes_ago_many: "{{count}} minutos atrás",
        minutes_ago_other: "{{count}} minutos atrás",
        in_hours_one: "Em 1 hora",
        in_hours_many: "Em {{count}} horas",
        in_hours_other: "Em {{count}} horas",
        hours_ago_one: "1 hora atrás",
        hours_ago_many: "{{count}} horas atrás",
        hours_ago_other: "{{count}} horas atrás"
      },
      absolute_timestamp: {
        today_format: "h: mm A",
        yesterday_format: "MMM D",
        last_week_format: "MMM D",
        tomorrow_format: "MMM D",
        next_week_format: "MMM D",
        this_year_format: "MMM D",
        other_format: "MMM D, AAAA",
        tooltip: "{{date, datetime(dateStyle: short; timeStyle: medium)}}"
      }
    },
    notification_templates: {
      cord: {
        reaction_single: "<user>{{senders.0.displayName}}</user> reagiu {{reaction}} para sua mensagem",
        reaction_double: "<user>{{senders.0.displayName}}</user> <bold>e</bold> <user>{{senders.1.displayName}}</user> reagiu {{reaction}} para sua mensagem",
        reply: "<user>{{senders.0.displayName}}</user> respondeu em <bold>{{threadName}}</bold>",
        reply_mention: "<user>{{senders.0.displayName}}</user> mencionou você em <bold>{{threadName}}</bold>",
        reply_mention_assign: "<user>{{senders.0.displayName}}</user> mencionou você e designou você para uma tarefa em <bold>{{threadName}}</bold>",
        reply_mention_unassign: "<user>{{senders.0.displayName}}</user> mencionou você e cancelou sua atribuição de uma tarefa em <bold>{{threadName}}</bold>",
        reply_mention_attachment: "<user>{{senders.0.displayName}}</user> mencionou você e lhe enviou um arquivo em <bold>{{threadName}}</bold>",
        reply_assign: "<user>{{senders.0.displayName}}</user> designou você para uma tarefa em <bold>{{threadName}}</bold>",
        reply_unassign: "<user>{{senders.0.displayName}}</user> cancelou sua atribuição de uma tarefa em <bold>{{threadName}}</bold>",
        thread_create: "<user>{{senders.0.displayName}}</user> criei um novo tópico chamado <bold>{{threadName}}</bold>",
        thread_resolve: "<user>{{senders.0.displayName}}</user> resolveu o tópico <bold>{{threadName}}</bold>",
        thread_unresolve: "<user>{{senders.0.displayName}}</user> reabri o tópico <bold>{{threadName}}</bold>",
        reaction_overflow_one: "<user>{{senders.0.displayName}}</user> <bold>e 1 outro</bold> reagiu {{reaction}} para sua mensagem",
        reaction_overflow_many: "<user>{{senders.0.displayName}}</user> <bold>e {{count}} outros</bold> reagiu {{reaction}} para sua mensagem",
        reaction_overflow_other: "<user>{{senders.0.displayName}}</user> <bold>e {{count}} outros</bold> reagiu {{reaction}} para sua mensagem"
      }
    },
    presence: {
      viewing: "Visualizando",
      timestamp: {
        in_less_than_a_minute: "Visualizando em menos de um minuto",
        just_now: "Visto agora há pouco",
        yesterday_format: "[Visualizado ontem às] h:mma",
        last_week_format: "[Visualizado] ddd",
        tomorrow_format: "[Visualizando amanhã às] h:mma",
        next_week_format: "[Visualizando] dddd",
        this_year_format: "[Visualizado] MMM D, AAAA",
        other_format: "[Visualizado] MMM D, AAAA",
        in_minutes_one: "Visualizando em 1 minuto",
        in_minutes_many: "Visualizando em {{count}} minutos",
        in_minutes_other: "Visualizando em {{count}} minutos",
        minutes_ago_one: "Visto há 1 minuto",
        minutes_ago_many: "Visto {{count}} minutos atrás",
        minutes_ago_other: "Visto {{count}} minutos atrás",
        in_hours_one: "Visualizando em 1 hora",
        in_hours_many: "Visualizando em {{count}} horas",
        in_hours_other: "Visualizando em {{count}} horas",
        hours_ago_one: "Visto há 1 hora",
        hours_ago_many: "Visto {{count}} horas atrás",
        hours_ago_other: "Visto {{count}} horas atrás"
      }
    },
    inbox: {
      go_to_page_action: "Vá para página",
      close_tooltip: "Fechar",
      inbox_title: "Sua caixa de entrada",
      all_pages_title: "Todas as páginas",
      settings_tooltip: "Configurações de colaboração",
      mark_all_as_read_action: "marcar tudo como lido",
      empty_state_title: "Vocês estão todos em dia",
      empty_state_body: "Quando alguém @mencionar você ou responder aos seus comentários, avisaremos você aqui."
    },
    annotation: {
      click_prompt: "Clique para comentar",
      click_tooltip: "Clique para comentar",
      click_or_select_tooltip: "Clique ou selecione o texto para comentar",
      cancel_annotating: "Cancelar",
      annotation: "Anotação",
      keep_pin_on_page_action: "Manter o pin na página",
      changed: "A área anotada mudou",
      hide_action: "Esconder para você",
      show_message_action: "Clique para ver a mensagem"
    },
    user: {
      viewer_user: "{{user.displayName}} (você)",
      viewer_user_subtitle: "{{user.secondaryDisplayName}}",
      other_user: "{{user.displayName}}",
      other_user_subtitle: "{{user.secondaryDisplayName}}",
      viewer_user_short: "Você"
    },
    emoji_picker: {
      categories: {
        custom: "Personalizado",
        'smileys-emotion': "Smileys e emoticons",
        'people-body': "Pessoas e corpo",
        'animals-nature': "Animais e natureza",
        'food-drink': "Comida e bebida",
        'travel-places': "Viagens e lugares",
        activities: "Atividades",
        objects: "Objetos",
        symbols: "Símbolos",
        flags: "Bandeiras"
      },
      categoriesLabel: "Categorias",
      emojiUnsupportedMessage: "Seu navegador não suporta emojis coloridos.",
      favoritesLabel: "Favoritos",
      loadingMessage: "Carregando…",
      networkErrorMessage: "Não foi possível carregar o emoji.",
      regionLabel: "Seletor de emojis",
      searchDescription: "Quando os resultados da pesquisa estiverem disponíveis, pressione para cima ou para baixo para selecionar e digite para escolher.",
      searchLabel: "Procurar",
      searchResultsLabel: "Procurar Resultados",
      skinToneDescription: "Quando expandido, pressione para cima ou para baixo para selecionar e digite para escolher.",
      skinToneLabel: "Escolha um tom de pele (atualmente {skinTone})",
      skinTones: [
        "Padrão",
        "Luz",
        "Médio-leve",
        "Médio",
        "Médio-escuro",
        "Escuro"
      ],
      skinTonesLabel: "Tons de pele"
    }
  },
  cimode: {
    emoji_picker: {
      categories: {
        custom: "personalizado",
        'smileys-emotion': "smileys-emoção",
        'people-body': "corpo-pessoa",
        'animals-nature': "animais-natureza",
        'food-drink': "comida-bebida",
        'travel-places': "lugares de viagem",
        activities: "Atividades",
        objects: "objetos",
        symbols: "símbolos",
        flags: "bandeiras"
      },
      categoriesLabel: "categoriasEtiqueta",
      emojiUnsupportedMessage: "emojiUnsupportedMessage",
      favoritesLabel: "favoritosEtiqueta",
      loadingMessage: "carregandoMensagem",
      networkErrorMessage: "redeErrorMessage",
      regionLabel: "regiãoLabel",
      searchDescription: "pesquisaDescrição",
      searchLabel: "searchLabel",
      searchResultsLabel: "searchResultsLabel",
      skinToneDescription: "skinToneDescrição",
      skinToneLabel: "skinToneLabel",
      skinTones: [
        "Padrão",
        "Luz",
        "Médio-leve",
        "Médio",
        "Médio-escuro",
        "Escuro"
      ],
      skinTonesLabel: "skinTonesLabel"
    }
  }
}