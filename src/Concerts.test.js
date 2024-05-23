import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Concerts from './Concerts';

test('opens ticket link for Vladivostok concert', () => {
    render(<Concerts />);
    const buyTicketButton = screen.getByText(/БИЛЕТЫ/i);
    buyTicketButton.click();
    expect(window.open).toHaveBeenCalledWith("https://afisha.yandex.ru/vladivostok/concert/tri-dnia-dozhdia-tour?utm_source=direct_search&utm_medium=paid_performance&utm_campaign=99676953%7CMSCAMP-60_%5BAF-PT%5D_%7BWS%3AS%7D_RU-2_goal-REV_Event-Концерты&utm_term=Три%20дня%20дождя%20концерт&utm_content=k50id%7C0100000050117216424_50117216424%7Ccid%7C99676953%7Cgid%7C5393166217%7Caid%7C15770069777%7Cpos%7Cpremium1%7Csrc%7Csearch_none%7Cdvc%7Cdesktop%7Cevid%7C488214%7Cretid%7C0&source=event", "_blank");
  });