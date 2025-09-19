[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsWorkOrdersItemsList

# Class: EquationsWorkOrdersItemsList

Describes the message consisting of the list of equation work order items

**`Generated`**

from message Scailo.EquationsWorkOrdersItemsList

## Hierarchy

- `Message`\<[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)\>

  ↳ **`EquationsWorkOrdersItemsList`**

## Table of contents

### Constructors

- [constructor](EquationsWorkOrdersItemsList.md#constructor)

### Properties

- [list](EquationsWorkOrdersItemsList.md#list)
- [fields](EquationsWorkOrdersItemsList.md#fields)
- [runtime](EquationsWorkOrdersItemsList.md#runtime)
- [typeName](EquationsWorkOrdersItemsList.md#typename)

### Methods

- [clone](EquationsWorkOrdersItemsList.md#clone)
- [equals](EquationsWorkOrdersItemsList.md#equals)
- [fromBinary](EquationsWorkOrdersItemsList.md#frombinary)
- [fromJson](EquationsWorkOrdersItemsList.md#fromjson)
- [fromJsonString](EquationsWorkOrdersItemsList.md#fromjsonstring)
- [getType](EquationsWorkOrdersItemsList.md#gettype)
- [toBinary](EquationsWorkOrdersItemsList.md#tobinary)
- [toJSON](EquationsWorkOrdersItemsList.md#tojson)
- [toJson](EquationsWorkOrdersItemsList.md#tojson-1)
- [toJsonString](EquationsWorkOrdersItemsList.md#tojsonstring)
- [equals](EquationsWorkOrdersItemsList.md#equals-1)
- [fromBinary](EquationsWorkOrdersItemsList.md#frombinary-1)
- [fromJson](EquationsWorkOrdersItemsList.md#fromjson-1)
- [fromJsonString](EquationsWorkOrdersItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsWorkOrdersItemsList**(`data?`): [`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)\> |

#### Returns

[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

#### Overrides

Message\&lt;EquationsWorkOrdersItemsList\&gt;.constructor

#### Defined in

[src/equations_work_orders.scailo_pb.ts:847](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L847)

## Properties

### list

• **list**: [`EquationWorkOrderItem`](EquationWorkOrderItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.EquationWorkOrderItem list = 1;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:845](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L845)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:854](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L854)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:852](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L852)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsWorkOrdersItemsList"``

#### Defined in

[src/equations_work_orders.scailo_pb.ts:853](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L853)

## Methods

### clone

▸ **clone**(): [`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

Create a deep copy.

#### Returns

[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md) \| `PlainMessage`\<[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md) \| `PlainMessage`\<[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)\> |
| `b` | `undefined` \| [`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md) \| `PlainMessage`\<[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:870](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L870)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:858](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L858)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:862](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L862)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:866](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L866)
