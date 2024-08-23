[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrderItemsList

# Class: SalesOrderItemsList

Describes the message consisting of the list of sales order items

**`Generated`**

from message Scailo.SalesOrderItemsList

## Hierarchy

- `Message`\<[`SalesOrderItemsList`](SalesOrderItemsList.md)\>

  ↳ **`SalesOrderItemsList`**

## Table of contents

### Constructors

- [constructor](SalesOrderItemsList.md#constructor)

### Properties

- [list](SalesOrderItemsList.md#list)
- [fields](SalesOrderItemsList.md#fields)
- [runtime](SalesOrderItemsList.md#runtime)
- [typeName](SalesOrderItemsList.md#typename)

### Methods

- [clone](SalesOrderItemsList.md#clone)
- [equals](SalesOrderItemsList.md#equals)
- [fromBinary](SalesOrderItemsList.md#frombinary)
- [fromJson](SalesOrderItemsList.md#fromjson)
- [fromJsonString](SalesOrderItemsList.md#fromjsonstring)
- [getType](SalesOrderItemsList.md#gettype)
- [toBinary](SalesOrderItemsList.md#tobinary)
- [toJSON](SalesOrderItemsList.md#tojson)
- [toJson](SalesOrderItemsList.md#tojson-1)
- [toJsonString](SalesOrderItemsList.md#tojsonstring)
- [equals](SalesOrderItemsList.md#equals-1)
- [fromBinary](SalesOrderItemsList.md#frombinary-1)
- [fromJson](SalesOrderItemsList.md#fromjson-1)
- [fromJsonString](SalesOrderItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrderItemsList**(`data?`): [`SalesOrderItemsList`](SalesOrderItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrderItemsList`](SalesOrderItemsList.md)\> |

#### Returns

[`SalesOrderItemsList`](SalesOrderItemsList.md)

#### Overrides

Message\&lt;SalesOrderItemsList\&gt;.constructor

#### Defined in

src/sales_orders.scailo_pb.ts:1480

## Properties

### list

• **list**: [`SalesOrderItem`](SalesOrderItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.SalesOrderItem list = 1;

#### Defined in

src/sales_orders.scailo_pb.ts:1478

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_orders.scailo_pb.ts:1487

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_orders.scailo_pb.ts:1485

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderItemsList"``

#### Defined in

src/sales_orders.scailo_pb.ts:1486

## Methods

### clone

▸ **clone**(): [`SalesOrderItemsList`](SalesOrderItemsList.md)

Create a deep copy.

#### Returns

[`SalesOrderItemsList`](SalesOrderItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrderItemsList`](SalesOrderItemsList.md) \| `PlainMessage`\<[`SalesOrderItemsList`](SalesOrderItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrderItemsList`](SalesOrderItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrderItemsList`](SalesOrderItemsList.md)\>

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
| `a` | `undefined` \| [`SalesOrderItemsList`](SalesOrderItemsList.md) \| `PlainMessage`\<[`SalesOrderItemsList`](SalesOrderItemsList.md)\> |
| `b` | `undefined` \| [`SalesOrderItemsList`](SalesOrderItemsList.md) \| `PlainMessage`\<[`SalesOrderItemsList`](SalesOrderItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_orders.scailo_pb.ts:1503

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrderItemsList`](SalesOrderItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrderItemsList`](SalesOrderItemsList.md)

#### Defined in

src/sales_orders.scailo_pb.ts:1491

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrderItemsList`](SalesOrderItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderItemsList`](SalesOrderItemsList.md)

#### Defined in

src/sales_orders.scailo_pb.ts:1495

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrderItemsList`](SalesOrderItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderItemsList`](SalesOrderItemsList.md)

#### Defined in

src/sales_orders.scailo_pb.ts:1499
