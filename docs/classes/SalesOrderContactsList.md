[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrderContactsList

# Class: SalesOrderContactsList

Describes the message consisting of the list of sales order contacts

**`Generated`**

from message Scailo.SalesOrderContactsList

## Hierarchy

- `Message`\<[`SalesOrderContactsList`](SalesOrderContactsList.md)\>

  ↳ **`SalesOrderContactsList`**

## Table of contents

### Constructors

- [constructor](SalesOrderContactsList.md#constructor)

### Properties

- [list](SalesOrderContactsList.md#list)
- [fields](SalesOrderContactsList.md#fields)
- [runtime](SalesOrderContactsList.md#runtime)
- [typeName](SalesOrderContactsList.md#typename)

### Methods

- [clone](SalesOrderContactsList.md#clone)
- [equals](SalesOrderContactsList.md#equals)
- [fromBinary](SalesOrderContactsList.md#frombinary)
- [fromJson](SalesOrderContactsList.md#fromjson)
- [fromJsonString](SalesOrderContactsList.md#fromjsonstring)
- [getType](SalesOrderContactsList.md#gettype)
- [toBinary](SalesOrderContactsList.md#tobinary)
- [toJSON](SalesOrderContactsList.md#tojson)
- [toJson](SalesOrderContactsList.md#tojson-1)
- [toJsonString](SalesOrderContactsList.md#tojsonstring)
- [equals](SalesOrderContactsList.md#equals-1)
- [fromBinary](SalesOrderContactsList.md#frombinary-1)
- [fromJson](SalesOrderContactsList.md#fromjson-1)
- [fromJsonString](SalesOrderContactsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrderContactsList**(`data?`): [`SalesOrderContactsList`](SalesOrderContactsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrderContactsList`](SalesOrderContactsList.md)\> |

#### Returns

[`SalesOrderContactsList`](SalesOrderContactsList.md)

#### Overrides

Message\&lt;SalesOrderContactsList\&gt;.constructor

#### Defined in

src/sales_orders.scailo_pb.ts:3144

## Properties

### list

• **list**: [`SalesOrderContact`](SalesOrderContact.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.SalesOrderContact list = 1;

#### Defined in

src/sales_orders.scailo_pb.ts:3142

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_orders.scailo_pb.ts:3151

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_orders.scailo_pb.ts:3149

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderContactsList"``

#### Defined in

src/sales_orders.scailo_pb.ts:3150

## Methods

### clone

▸ **clone**(): [`SalesOrderContactsList`](SalesOrderContactsList.md)

Create a deep copy.

#### Returns

[`SalesOrderContactsList`](SalesOrderContactsList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrderContactsList`](SalesOrderContactsList.md) \| `PlainMessage`\<[`SalesOrderContactsList`](SalesOrderContactsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrderContactsList`](SalesOrderContactsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrderContactsList`](SalesOrderContactsList.md)\>

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
| `a` | `undefined` \| [`SalesOrderContactsList`](SalesOrderContactsList.md) \| `PlainMessage`\<[`SalesOrderContactsList`](SalesOrderContactsList.md)\> |
| `b` | `undefined` \| [`SalesOrderContactsList`](SalesOrderContactsList.md) \| `PlainMessage`\<[`SalesOrderContactsList`](SalesOrderContactsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_orders.scailo_pb.ts:3167

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrderContactsList`](SalesOrderContactsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrderContactsList`](SalesOrderContactsList.md)

#### Defined in

src/sales_orders.scailo_pb.ts:3155

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrderContactsList`](SalesOrderContactsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderContactsList`](SalesOrderContactsList.md)

#### Defined in

src/sales_orders.scailo_pb.ts:3159

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrderContactsList`](SalesOrderContactsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderContactsList`](SalesOrderContactsList.md)

#### Defined in

src/sales_orders.scailo_pb.ts:3163
