import { render, screen } from "@testing-library/react"
import { ProductCard } from "./ProductCard"

describe("Проверка страницы товаров", () => {
    test("Проверка на заполностиь карточки", () => {
        render(
            <ul>
                <ProductCard
                    title="Тестовый тест"
                    price={1500}
                    imageUrl="./"
                />
            </ul>
        )
        expect(screen.getByText("Тестовый тест")).toBeInTheDocument()
    })
    test("Проверка работы скидки", () => {
        render(
            <ul>
                <ProductCard
                    title="Тестовый тест"
                    price={4000}
                    discount={0.6}
                    imageUrl="./"
                />
            </ul>
        )

        expect(screen.getByText("4000")).toBeInTheDocument()
        expect(screen.getByText("1600")).toBeInTheDocument()
    })


})
