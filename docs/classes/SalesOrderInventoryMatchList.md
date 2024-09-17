[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrderInventoryMatchList

# Class: SalesOrderInventoryMatchList

Describes the list of inventory match families

**`Generated`**

from message Scailo.SalesOrderInventoryMatchList

## Hierarchy

- `Message`\<[`SalesOrderInventoryMatchList`](SalesOrderInventoryMatchList.md)\>

  ↳ **`SalesOrderInventoryMatchList`**

## Table of contents

### Constructors

- [constructor](SalesOrderInventoryMatchList.md#constructor)

### Properties

- [list](SalesOrderInventoryMatchList.md#list)
- [fields](SalesOrderInventoryMatchList.md#fields)
- [runtime](SalesOrderInventoryMatchList.md#runtime)
- [typeName](SalesOrderInventoryMatchList.md#typename)

### Methods

- [clone](SalesOrderInventoryMatchList.md#clone)
- [equals](SalesOrderInventoryMatchList.md#equals)
- [fromBinary](SalesOrderInventoryMatchList.md#frombinary)
- [fromJson](SalesOrderInventoryMatchList.md#fromjson)
- [fromJsonString](SalesOrderInventoryMatchList.md#fromjsonstring)
- [getType](SalesOrderInventoryMatchList.md#gettype)
- [toBinary](SalesOrderInventoryMatchList.md#tobinary)
- [toJSON](SalesOrderInventoryMatchList.md#tojson)
- [toJson](SalesOrderInventoryMatchList.md#tojson-1)
- [toJsonString](SalesOrderInventoryMatchList.md#tojsonstring)
- [equals](SalesOrderInventoryMatchList.md#equals-1)
- [fromBinary](SalesOrderInventoryMatchList.md#frombinary-1)
- [fromJson](SalesOrderInventoryMatchList.md#fromjson-1)
- [fromJsonString](SalesOrderInventoryMatchList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrderInventoryMatchList**(`data?`): [`SalesOrderInventoryMatchList`](SalesOrderInventoryMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrderInventoryMatchList`](SalesOrderInventoryMatchList.md)\> |

#### Returns

[`SalesOrderInventoryMatchList`](SalesOrderInventoryMatchList.md)

#### Overrides

Message\&lt;SalesOrderInventoryMatchList\&gt;.constructor

#### Defined in

src/sales_orders.scailo_pb.ts:3310

## Properties

### list

• **list**: [`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.SalesOrderInventoryMatch list = 1;

#### Defined in

src/sales_orders.scailo_pb.ts:3308

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_orders.scailo_pb.ts:3317

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_orders.scailo_pb.ts:3315

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderInventoryMatchList"``

#### Defined in

src/sales_orders.scailo_pb.ts:3316

## Methods

### clone

▸ **clone**(): [`SalesOrderInventoryMatchList`](SalesOrderInventoryMatchList.md)

Create a deep copy.

#### Returns

[`SalesOrderInventoryMatchList`](SalesOrderInventoryMatchList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrderInventoryMatchList`](SalesOrderInventoryMatchList.md) \| `PlainMessage`\<[`SalesOrderInventoryMatchList`](SalesOrderInventoryMatchList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrderInventoryMatchList`](SalesOrderInventoryMatchList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrderInventoryMatchList`](SalesOrderInventoryMatchList.md)\>

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
| `a` | `undefined` \| [`SalesOrderInventoryMatchList`](SalesOrderInventoryMatchList.md) \| `PlainMessage`\<[`SalesOrderInventoryMatchList`](SalesOrderInventoryMatchList.md)\> |
| `b` | `undefined` \| [`SalesOrderInventoryMatchList`](SalesOrderInventoryMatchList.md) \| `PlainMessage`\<[`SalesOrderInventoryMatchList`](SalesOrderInventoryMatchList.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_orders.scailo_pb.ts:3333

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrderInventoryMatchList`](SalesOrderInventoryMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrderInventoryMatchList`](SalesOrderInventoryMatchList.md)

#### Defined in

src/sales_orders.scailo_pb.ts:3321

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrderInventoryMatchList`](SalesOrderInventoryMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderInventoryMatchList`](SalesOrderInventoryMatchList.md)

#### Defined in

src/sales_orders.scailo_pb.ts:3325

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrderInventoryMatchList`](SalesOrderInventoryMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderInventoryMatchList`](SalesOrderInventoryMatchList.md)

#### Defined in

src/sales_orders.scailo_pb.ts:3329
