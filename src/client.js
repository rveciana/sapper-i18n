import * as sapper from '../__sapper__/client.js';

import { i18n } from 'svelte-i18n'
import { Store } from 'svelte/store'

/** i18n(svelteStore, { dictionary }) */
let store = new Store()

store = i18n(store, {
  dictionary: {
    'pt-BR': {
      message: 'Mensagem',
      greeting: 'Olá {name}, como vai?',
      greetingIndex: 'Olá {0}, como vai?',
      meter: 'metros | metro | metros',
      book: 'livro | livros',
      messages: {
        alert: 'Alerta',
        error: 'Erro',
      },
    },
    'en-US': {
      message: 'Message',
      greeting: 'Hello {name}, how are you?',
      greetingIndex: 'Hello {0}, how are you?',
      meter: 'meters | meter | meters',
      book: 'book | books',
      messages: {
        alert: 'Alert',
        error: 'Error',
      },
    },
  },
})

/**
 * Extend the initial dictionary.
 * Dictionaries are deeply merged.
 * */
store.i18n.extendDictionary({
  'pt-BR': {
    messages: {
      warn: 'Aviso',
      success: 'Sucesso',
    },
  },
  'en-US': {
    messages: {
      warn: 'Warn',
      success: 'Success',
    },
  },
})

/** Set the initial locale */
store.i18n.setLocale('en-US')


sapper.start({
  target: document.querySelector('#sapper'),
  store: data => {
    store.set(data);
    return store;
  }
});