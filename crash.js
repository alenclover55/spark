document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("crashChart").getContext("2d");
  let multiplier = 1;
  let speed = 0.01;
  let time = 0;
  let gameInterval;
  let timerInterval;
  let timer = 15;

  function createGradient() {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(112, 215, 72, 0.2)");
    gradient.addColorStop(1, "rgba(112, 215, 72, 0.0)");
    return gradient;
  }

  const crashChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Crash Иксовка",
          data: [],
          borderColor: "#FFFFFF",
          borderWidth: 15,
          fill: true,
          tension: 0.8,
          backgroundColor: "#FF3F11",
          pointRadius: 30,
          pointBackgroundColor: "#FFFFFF", // Цвет точек
          pointBorderColor: "#FFFFFF", // Цвет границы точек
        },
      ],
    },
    options: {
      animation: false,
      responsive: true,
      maintainAspectRatio: false, // Важно для растягивания
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      options: {
        elements: {
          line: {
            cubicInterpolationMode: "monotone", // Use monotone for smoother lines
          },
        },
      },
      scales: {
        x: {
          type: "linear",
          position: "bottom",
          beginAtZero: false,
          min: 1,
          ticks: {
            color: "white",
            font: {
              family: "stolzlMedium, sans-serif",
              weight: 600,
              size: 14,
            },
            padding: 12,
            callback: function (value) {
              return value < 1 ? null : value; // Возвращаем null для значений ниже 1
            },
          },
          border: {
            color: "transparent",
          },
          grid: {
            color: "transparent",
          },
          background: {
            color: "red",
          },
        },
        y: {
          beginAtZero: false,
          min: 1,
          ticks: {
            color: "#717787",
            font: {
              family: "stolzlMedium, sans-serif",
              weight: 600,
            },
            padding: 16,
            callback: function (value) {
              return value < 1 ? null : value; // Возвращаем null для значений ниже 1
            },
          },
          border: {
            color: "transparent",
          },
          grid: {
            color: "transparent",
          },
        },
      },
    },
  });

  const multiplierDisplay = document.getElementById("multiplierDisplay");

  function updateChart() {
    time += 1;
    multiplier += speed;
    speed += 0.0005;

    crashChart.data.labels.push(time);
    crashChart.data.datasets[0].data.push(multiplier);

    // Включаем точки для первого и последнего элемента
    crashChart.data.datasets[0].pointRadius =
      crashChart.data.datasets[0].data.map((_, index) => {
        return index === 0 ||
          index === crashChart.data.datasets[0].data.length - 1
          ? 5
          : 0;
      });

    crashChart.update();

    multiplierDisplay.innerHTML = `x${multiplier.toFixed(2)}`;

    if (multiplier > 6) {
      stopGame();
    }
  }

  function startGame() {
    $(".crash__timer").hide();
    gameInterval = setInterval(updateChart, 50);
  }

  function stopGame() {
    clearInterval(gameInterval);
    const stopGradient = ctx.createLinearGradient(0, 0, 0, 400);
    stopGradient.addColorStop(0, "rgba(255, 51, 63, 0.2)");
    stopGradient.addColorStop(1, "rgba(255, 51, 63, 0.0)");

    crashChart.data.datasets[0].backgroundColor = "#212121";
    crashChart.data.datasets[0].borderColor = "#434343";
    $(".crash__graph").addClass("lose");
    crashChart.update();

    // Показываем сообщение о проигрыше
    $("#loseMessage").fadeIn().delay(2000).fadeOut();

    setTimeout(() => {
      newGame();
    }, 2000);
  }

  function newGame() {
    clearInterval(gameInterval);
    clearInterval(timerInterval);

    timer = 15;
    $("#crashTimer").html(timer);
    $(".crash__timer").show();
    $("#multiplierDisplay").html("");

    multiplier = 1;
    speed = 0.01;
    time = 0;

    crashChart.data.labels = [];
    crashChart.data.datasets[0].data = [];
    crashChart.data.datasets[0].backgroundColor = "#FF3F11";
    crashChart.data.datasets[0].borderColor = "#FFFFFF";
    crashChart.update();

    $(".crash__graph").removeClass("lose");

    // Показываем сообщение о победе, если игра завершилась успешно
    if (multiplier > 6) {
      $("#winMessage").fadeIn().delay(2000).fadeOut();
    }

    timerShow(); // Запуск таймера заново
  }
  function timerShow() {
    timerInterval = setInterval(() => {
      timer--;
      $("#crashTimer").html(timer < 10 ? "0" + timer : timer);
      if (timer <= 0) {
        clearInterval(timerInterval);
        startGame();
      }
    }, 1000);
  }

  window.addEventListener("resize", () => crashChart.resize());

  timerShow();

  $("#crashBet").on("input", function (event) {
    let value = $(this).val();
    value = value.replace(/\D/g, "");
    $(this).val(value);
  });

  $("#crashX").on("input", function (event) {
    let value = $(this).val();
    value = value.replace(/\D/g, "");
    $(this).val(value);
  });
});
