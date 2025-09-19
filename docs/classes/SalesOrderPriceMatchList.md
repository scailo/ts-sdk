[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrderPriceMatchList

# Class: SalesOrderPriceMatchList

Describes the list of inventory match families

**`Generated`**

from message Scailo.SalesOrderPriceMatchList

## Hierarchy

- `Message`\<[`SalesOrderPriceMatchList`](SalesOrderPriceMatchList.md)\>

  ↳ **`SalesOrderPriceMatchList`**

## Table of contents

### Constructors

- [constructor](SalesOrderPriceMatchList.md#constructor)

### Properties

- [list](SalesOrderPriceMatchList.md#list)
- [fields](SalesOrderPriceMatchList.md#fields)
- [runtime](SalesOrderPriceMatchList.md#runtime)
- [typeName](SalesOrderPriceMatchList.md#typename)

### Methods

- [clone](SalesOrderPriceMatchList.md#clone)
- [equals](SalesOrderPriceMatchList.md#equals)
- [fromBinary](SalesOrderPriceMatchList.md#frombinary)
- [fromJson](SalesOrderPriceMatchList.md#fromjson)
- [fromJsonString](SalesOrderPriceMatchList.md#fromjsonstring)
- [getType](SalesOrderPriceMatchList.md#gettype)
- [toBinary](SalesOrderPriceMatchList.md#tobinary)
- [toJSON](SalesOrderPriceMatchList.md#tojson)
- [toJson](SalesOrderPriceMatchList.md#tojson-1)
- [toJsonString](SalesOrderPriceMatchList.md#tojsonstring)
- [equals](SalesOrderPriceMatchList.md#equals-1)
- [fromBinary](SalesOrderPriceMatchList.md#frombinary-1)
- [fromJson](SalesOrderPriceMatchList.md#fromjson-1)
- [fromJsonString](SalesOrderPriceMatchList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrderPriceMatchList**(`data?`): [`SalesOrderPriceMatchList`](SalesOrderPriceMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrderPriceMatchList`](SalesOrderPriceMatchList.md)\> |

#### Returns

[`SalesOrderPriceMatchList`](SalesOrderPriceMatchList.md)

#### Overrides

Message\&lt;SalesOrderPriceMatchList\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:3612](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3612)

## Properties

### list

• **list**: [`SalesOrderPriceMatch`](SalesOrderPriceMatch.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.SalesOrderPriceMatch list = 1;

#### Defined in

[src/sales_orders.scailo_pb.ts:3610](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3610)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:3619](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3619)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:3617](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3617)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderPriceMatchList"``

#### Defined in

[src/sales_orders.scailo_pb.ts:3618](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3618)

## Methods

### clone

▸ **clone**(): [`SalesOrderPriceMatchList`](SalesOrderPriceMatchList.md)

Create a deep copy.

#### Returns

[`SalesOrderPriceMatchList`](SalesOrderPriceMatchList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrderPriceMatchList`](SalesOrderPriceMatchList.md) \| `PlainMessage`\<[`SalesOrderPriceMatchList`](SalesOrderPriceMatchList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrderPriceMatchList`](SalesOrderPriceMatchList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrderPriceMatchList`](SalesOrderPriceMatchList.md)\>

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
| `a` | `undefined` \| [`SalesOrderPriceMatchList`](SalesOrderPriceMatchList.md) \| `PlainMessage`\<[`SalesOrderPriceMatchList`](SalesOrderPriceMatchList.md)\> |
| `b` | `undefined` \| [`SalesOrderPriceMatchList`](SalesOrderPriceMatchList.md) \| `PlainMessage`\<[`SalesOrderPriceMatchList`](SalesOrderPriceMatchList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:3635](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3635)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrderPriceMatchList`](SalesOrderPriceMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrderPriceMatchList`](SalesOrderPriceMatchList.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:3623](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3623)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrderPriceMatchList`](SalesOrderPriceMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderPriceMatchList`](SalesOrderPriceMatchList.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:3627](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3627)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrderPriceMatchList`](SalesOrderPriceMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderPriceMatchList`](SalesOrderPriceMatchList.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:3631](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3631)
