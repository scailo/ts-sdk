[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseEnquiryItemHistoryRequest

# Class: PurchaseEnquiryItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.PurchaseEnquiryItemHistoryRequest

## Hierarchy

- `Message`\<[`PurchaseEnquiryItemHistoryRequest`](PurchaseEnquiryItemHistoryRequest.md)\>

  ↳ **`PurchaseEnquiryItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](PurchaseEnquiryItemHistoryRequest.md#constructor)

### Properties

- [name](PurchaseEnquiryItemHistoryRequest.md#name)
- [purchaseEnquiryId](PurchaseEnquiryItemHistoryRequest.md#purchaseenquiryid)
- [fields](PurchaseEnquiryItemHistoryRequest.md#fields)
- [runtime](PurchaseEnquiryItemHistoryRequest.md#runtime)
- [typeName](PurchaseEnquiryItemHistoryRequest.md#typename)

### Methods

- [clone](PurchaseEnquiryItemHistoryRequest.md#clone)
- [equals](PurchaseEnquiryItemHistoryRequest.md#equals)
- [fromBinary](PurchaseEnquiryItemHistoryRequest.md#frombinary)
- [fromJson](PurchaseEnquiryItemHistoryRequest.md#fromjson)
- [fromJsonString](PurchaseEnquiryItemHistoryRequest.md#fromjsonstring)
- [getType](PurchaseEnquiryItemHistoryRequest.md#gettype)
- [toBinary](PurchaseEnquiryItemHistoryRequest.md#tobinary)
- [toJSON](PurchaseEnquiryItemHistoryRequest.md#tojson)
- [toJson](PurchaseEnquiryItemHistoryRequest.md#tojson-1)
- [toJsonString](PurchaseEnquiryItemHistoryRequest.md#tojsonstring)
- [equals](PurchaseEnquiryItemHistoryRequest.md#equals-1)
- [fromBinary](PurchaseEnquiryItemHistoryRequest.md#frombinary-1)
- [fromJson](PurchaseEnquiryItemHistoryRequest.md#fromjson-1)
- [fromJsonString](PurchaseEnquiryItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseEnquiryItemHistoryRequest**(`data?`): [`PurchaseEnquiryItemHistoryRequest`](PurchaseEnquiryItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseEnquiryItemHistoryRequest`](PurchaseEnquiryItemHistoryRequest.md)\> |

#### Returns

[`PurchaseEnquiryItemHistoryRequest`](PurchaseEnquiryItemHistoryRequest.md)

#### Overrides

Message\&lt;PurchaseEnquiryItemHistoryRequest\&gt;.constructor

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:953](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L953)

## Properties

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:951](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L951)

___

### purchaseEnquiryId

• **purchaseEnquiryId**: `bigint` = `protoInt64.zero`

Stores the purchase enquiry ID

**`Generated`**

from field: uint64 purchase_enquiry_id = 10;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:944](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L944)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:960](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L960)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:958](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L958)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseEnquiryItemHistoryRequest"``

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:959](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L959)

## Methods

### clone

▸ **clone**(): [`PurchaseEnquiryItemHistoryRequest`](PurchaseEnquiryItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`PurchaseEnquiryItemHistoryRequest`](PurchaseEnquiryItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseEnquiryItemHistoryRequest`](PurchaseEnquiryItemHistoryRequest.md) \| `PlainMessage`\<[`PurchaseEnquiryItemHistoryRequest`](PurchaseEnquiryItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseEnquiryItemHistoryRequest`](PurchaseEnquiryItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseEnquiryItemHistoryRequest`](PurchaseEnquiryItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`PurchaseEnquiryItemHistoryRequest`](PurchaseEnquiryItemHistoryRequest.md) \| `PlainMessage`\<[`PurchaseEnquiryItemHistoryRequest`](PurchaseEnquiryItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`PurchaseEnquiryItemHistoryRequest`](PurchaseEnquiryItemHistoryRequest.md) \| `PlainMessage`\<[`PurchaseEnquiryItemHistoryRequest`](PurchaseEnquiryItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:977](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L977)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseEnquiryItemHistoryRequest`](PurchaseEnquiryItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseEnquiryItemHistoryRequest`](PurchaseEnquiryItemHistoryRequest.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:965](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L965)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseEnquiryItemHistoryRequest`](PurchaseEnquiryItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseEnquiryItemHistoryRequest`](PurchaseEnquiryItemHistoryRequest.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:969](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L969)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseEnquiryItemHistoryRequest`](PurchaseEnquiryItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseEnquiryItemHistoryRequest`](PurchaseEnquiryItemHistoryRequest.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:973](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L973)
