[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesEnquiriesServicePaginationResponse

# Class: PurchasesEnquiriesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.PurchasesEnquiriesServicePaginationResponse

## Hierarchy

- `Message`\<[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)\>

  ↳ **`PurchasesEnquiriesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](PurchasesEnquiriesServicePaginationResponse.md#constructor)

### Properties

- [count](PurchasesEnquiriesServicePaginationResponse.md#count)
- [offset](PurchasesEnquiriesServicePaginationResponse.md#offset)
- [payload](PurchasesEnquiriesServicePaginationResponse.md#payload)
- [total](PurchasesEnquiriesServicePaginationResponse.md#total)
- [fields](PurchasesEnquiriesServicePaginationResponse.md#fields)
- [runtime](PurchasesEnquiriesServicePaginationResponse.md#runtime)
- [typeName](PurchasesEnquiriesServicePaginationResponse.md#typename)

### Methods

- [clone](PurchasesEnquiriesServicePaginationResponse.md#clone)
- [equals](PurchasesEnquiriesServicePaginationResponse.md#equals)
- [fromBinary](PurchasesEnquiriesServicePaginationResponse.md#frombinary)
- [fromJson](PurchasesEnquiriesServicePaginationResponse.md#fromjson)
- [fromJsonString](PurchasesEnquiriesServicePaginationResponse.md#fromjsonstring)
- [getType](PurchasesEnquiriesServicePaginationResponse.md#gettype)
- [toBinary](PurchasesEnquiriesServicePaginationResponse.md#tobinary)
- [toJSON](PurchasesEnquiriesServicePaginationResponse.md#tojson)
- [toJson](PurchasesEnquiriesServicePaginationResponse.md#tojson-1)
- [toJsonString](PurchasesEnquiriesServicePaginationResponse.md#tojsonstring)
- [equals](PurchasesEnquiriesServicePaginationResponse.md#equals-1)
- [fromBinary](PurchasesEnquiriesServicePaginationResponse.md#frombinary-1)
- [fromJson](PurchasesEnquiriesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](PurchasesEnquiriesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesEnquiriesServicePaginationResponse**(`data?`): [`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)\> |

#### Returns

[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

#### Overrides

Message\&lt;PurchasesEnquiriesServicePaginationResponse\&gt;.constructor

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1335](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L1335)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1312](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L1312)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1319](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L1319)

___

### payload

• **payload**: [`PurchaseEnquiry`](PurchaseEnquiry.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.PurchaseEnquiry payload = 4;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1333](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L1333)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1326](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L1326)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1342](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L1342)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1340](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L1340)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesEnquiriesServicePaginationResponse"``

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1341](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L1341)

## Methods

### clone

▸ **clone**(): [`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md) \| `PlainMessage`\<[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md) \| `PlainMessage`\<[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md) \| `PlainMessage`\<[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1361](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L1361)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1349](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L1349)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1353](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L1353)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1357](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L1357)
