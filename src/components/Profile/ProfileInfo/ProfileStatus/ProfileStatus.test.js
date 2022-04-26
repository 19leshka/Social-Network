import React from "react";
import { create, act } from "react-test-renderer";
import ProfileStatus from './ProfileStatus'

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
      const component = create(<ProfileStatus status="Я усталь hello" />);
      const instance = component.root;
      expect(instance.props.status).toBe("Я усталь hello");
    });
    test("after creation <span> with status should be displayed with correct status", () => {
      const component = create(<ProfileStatus status="Я усталь hello" />);
      const root = component.root;
      const span = root.findByType("span");
      expect(span).not.toBeNull();
    });
    test("after creation <input> shouldn't be displayed", () => {
      const component = create(<ProfileStatus status="Я усталь hello" />);
      const root = component.root;
      expect(()=>{
        const input = root.findByType("input");
      }).toThrow();
    });
    test("after creation in <span> with status should be displayed status text", () => {
      const component = create(<ProfileStatus status="Я усталь hello" />);
      const root = component.root;
      const span = root.findByType("span");
      expect(span.children[0]).toBe("Я усталь hello");
    });
    test("input should be displayed in editMode instead of span", () => {
      const component = create(<ProfileStatus status="Я усталь hello" />);
      const root = component.root;
      const span = root.findByType("span");
      act(() => {
        span.props.onClick()
      })
      const input = root.findByType("input");
      expect(input.props.value).toBe("Я усталь hello");
    });
  });