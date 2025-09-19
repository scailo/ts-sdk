[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsServicePaginatedItemsResponse

# Class: PurchasesIndentsServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.PurchasesIndentsServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`PurchasesIndentsServicePaginatedItemsResponse`](PurchasesIndentsServicePaginatedItemsResponse.md)\>

  ↳ **`PurchasesIndentsServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](PurchasesIndentsServicePaginatedItemsResponse.md#count)
- [offset](PurchasesIndentsServicePaginatedItemsResponse.md#offset)
- [payload](PurchasesIndentsServicePaginatedItemsResponse.md#payload)
- [total](PurchasesIndentsServicePaginatedItemsResponse.md#total)
- [fields](PurchasesIndentsServicePaginatedItemsResponse.md#fields)
- [runtime](PurchasesIndentsServicePaginatedItemsResponse.md#runtime)
- [typeName](PurchasesIndentsServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](PurchasesIndentsServicePaginatedItemsResponse.md#clone)
- [equals](PurchasesIndentsServicePaginatedItemsResponse.md#equals)
- [fromBinary](PurchasesIndentsServicePaginatedItemsResponse.md#frombinary)
- [fromJson](PurchasesIndentsServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](PurchasesIndentsServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](PurchasesIndentsServicePaginatedItemsResponse.md#gettype)
- [toBinary](PurchasesIndentsServicePaginatedItemsResponse.md#tobinary)
- [toJSON](PurchasesIndentsServicePaginatedItemsResponse.md#tojson)
- [toJson](PurchasesIndentsServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](PurchasesIndentsServicePaginatedItemsResponse.md#tojsonstring)
- [equals](PurchasesIndentsServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](PurchasesIndentsServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](PurchasesIndentsServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](PurchasesIndentsServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsServicePaginatedItemsResponse**(`data?`): [`PurchasesIndentsServicePaginatedItemsResponse`](PurchasesIndentsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesIndentsServicePaginatedItemsResponse`](PurchasesIndentsServicePaginatedItemsResponse.md)\> |

#### Returns

[`PurchasesIndentsServicePaginatedItemsResponse`](PurchasesIndentsServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;PurchasesIndentsServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

[src/purchases_indents.scailo_pb.ts:2037](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L2037)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2014](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L2014)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2021](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L2021)

___

### payload

• **payload**: [`PurchaseIndentItem`](PurchaseIndentItem.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.PurchaseIndentItem payload = 4;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2035](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L2035)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2028](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L2028)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_indents.scailo_pb.ts:2044](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L2044)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_indents.scailo_pb.ts:2042](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L2042)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesIndentsServicePaginatedItemsResponse"``

#### Defined in

[src/purchases_indents.scailo_pb.ts:2043](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L2043)

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsServicePaginatedItemsResponse`](PurchasesIndentsServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsServicePaginatedItemsResponse`](PurchasesIndentsServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsServicePaginatedItemsResponse`](PurchasesIndentsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`PurchasesIndentsServicePaginatedItemsResponse`](PurchasesIndentsServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesIndentsServicePaginatedItemsResponse`](PurchasesIndentsServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesIndentsServicePaginatedItemsResponse`](PurchasesIndentsServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsServicePaginatedItemsResponse`](PurchasesIndentsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`PurchasesIndentsServicePaginatedItemsResponse`](PurchasesIndentsServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsServicePaginatedItemsResponse`](PurchasesIndentsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`PurchasesIndentsServicePaginatedItemsResponse`](PurchasesIndentsServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_indents.scailo_pb.ts:2063](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L2063)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServicePaginatedItemsResponse`](PurchasesIndentsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsServicePaginatedItemsResponse`](PurchasesIndentsServicePaginatedItemsResponse.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:2051](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L2051)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServicePaginatedItemsResponse`](PurchasesIndentsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServicePaginatedItemsResponse`](PurchasesIndentsServicePaginatedItemsResponse.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:2055](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L2055)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServicePaginatedItemsResponse`](PurchasesIndentsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServicePaginatedItemsResponse`](PurchasesIndentsServicePaginatedItemsResponse.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:2059](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L2059)
