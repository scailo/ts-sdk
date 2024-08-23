[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrdersList

# Class: SalesOrdersList

Describes the message consisting of the list of sales orders

**`Generated`**

from message Scailo.SalesOrdersList

## Hierarchy

- `Message`\<[`SalesOrdersList`](SalesOrdersList.md)\>

  ↳ **`SalesOrdersList`**

## Table of contents

### Constructors

- [constructor](SalesOrdersList.md#constructor)

### Properties

- [list](SalesOrdersList.md#list)
- [fields](SalesOrdersList.md#fields)
- [runtime](SalesOrdersList.md#runtime)
- [typeName](SalesOrdersList.md#typename)

### Methods

- [clone](SalesOrdersList.md#clone)
- [equals](SalesOrdersList.md#equals)
- [fromBinary](SalesOrdersList.md#frombinary)
- [fromJson](SalesOrdersList.md#fromjson)
- [fromJsonString](SalesOrdersList.md#fromjsonstring)
- [getType](SalesOrdersList.md#gettype)
- [toBinary](SalesOrdersList.md#tobinary)
- [toJSON](SalesOrdersList.md#tojson)
- [toJson](SalesOrdersList.md#tojson-1)
- [toJsonString](SalesOrdersList.md#tojsonstring)
- [equals](SalesOrdersList.md#equals-1)
- [fromBinary](SalesOrdersList.md#frombinary-1)
- [fromJson](SalesOrdersList.md#fromjson-1)
- [fromJsonString](SalesOrdersList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrdersList**(`data?`): [`SalesOrdersList`](SalesOrdersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrdersList`](SalesOrdersList.md)\> |

#### Returns

[`SalesOrdersList`](SalesOrdersList.md)

#### Overrides

Message\&lt;SalesOrdersList\&gt;.constructor

#### Defined in

src/sales_orders.scailo_pb.ts:1438

## Properties

### list

• **list**: [`SalesOrder`](SalesOrder.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.SalesOrder list = 1;

#### Defined in

src/sales_orders.scailo_pb.ts:1436

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_orders.scailo_pb.ts:1445

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_orders.scailo_pb.ts:1443

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrdersList"``

#### Defined in

src/sales_orders.scailo_pb.ts:1444

## Methods

### clone

▸ **clone**(): [`SalesOrdersList`](SalesOrdersList.md)

Create a deep copy.

#### Returns

[`SalesOrdersList`](SalesOrdersList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrdersList`](SalesOrdersList.md) \| `PlainMessage`\<[`SalesOrdersList`](SalesOrdersList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrdersList`](SalesOrdersList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrdersList`](SalesOrdersList.md)\>

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
| `a` | `undefined` \| [`SalesOrdersList`](SalesOrdersList.md) \| `PlainMessage`\<[`SalesOrdersList`](SalesOrdersList.md)\> |
| `b` | `undefined` \| [`SalesOrdersList`](SalesOrdersList.md) \| `PlainMessage`\<[`SalesOrdersList`](SalesOrdersList.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_orders.scailo_pb.ts:1461

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrdersList`](SalesOrdersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrdersList`](SalesOrdersList.md)

#### Defined in

src/sales_orders.scailo_pb.ts:1449

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrdersList`](SalesOrdersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersList`](SalesOrdersList.md)

#### Defined in

src/sales_orders.scailo_pb.ts:1453

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrdersList`](SalesOrdersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersList`](SalesOrdersList.md)

#### Defined in

src/sales_orders.scailo_pb.ts:1457
