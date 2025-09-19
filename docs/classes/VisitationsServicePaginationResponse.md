[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VisitationsServicePaginationResponse

# Class: VisitationsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.VisitationsServicePaginationResponse

## Hierarchy

- `Message`\<[`VisitationsServicePaginationResponse`](VisitationsServicePaginationResponse.md)\>

  ↳ **`VisitationsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](VisitationsServicePaginationResponse.md#constructor)

### Properties

- [count](VisitationsServicePaginationResponse.md#count)
- [offset](VisitationsServicePaginationResponse.md#offset)
- [payload](VisitationsServicePaginationResponse.md#payload)
- [total](VisitationsServicePaginationResponse.md#total)
- [fields](VisitationsServicePaginationResponse.md#fields)
- [runtime](VisitationsServicePaginationResponse.md#runtime)
- [typeName](VisitationsServicePaginationResponse.md#typename)

### Methods

- [clone](VisitationsServicePaginationResponse.md#clone)
- [equals](VisitationsServicePaginationResponse.md#equals)
- [fromBinary](VisitationsServicePaginationResponse.md#frombinary)
- [fromJson](VisitationsServicePaginationResponse.md#fromjson)
- [fromJsonString](VisitationsServicePaginationResponse.md#fromjsonstring)
- [getType](VisitationsServicePaginationResponse.md#gettype)
- [toBinary](VisitationsServicePaginationResponse.md#tobinary)
- [toJSON](VisitationsServicePaginationResponse.md#tojson)
- [toJson](VisitationsServicePaginationResponse.md#tojson-1)
- [toJsonString](VisitationsServicePaginationResponse.md#tojsonstring)
- [equals](VisitationsServicePaginationResponse.md#equals-1)
- [fromBinary](VisitationsServicePaginationResponse.md#frombinary-1)
- [fromJson](VisitationsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](VisitationsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new VisitationsServicePaginationResponse**(`data?`): [`VisitationsServicePaginationResponse`](VisitationsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VisitationsServicePaginationResponse`](VisitationsServicePaginationResponse.md)\> |

#### Returns

[`VisitationsServicePaginationResponse`](VisitationsServicePaginationResponse.md)

#### Overrides

Message\&lt;VisitationsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/visitations.scailo_pb.ts:835](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L835)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/visitations.scailo_pb.ts:812](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L812)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/visitations.scailo_pb.ts:819](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L819)

___

### payload

• **payload**: [`Visitation`](Visitation.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.Visitation payload = 4;

#### Defined in

[src/visitations.scailo_pb.ts:833](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L833)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/visitations.scailo_pb.ts:826](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L826)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/visitations.scailo_pb.ts:842](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L842)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/visitations.scailo_pb.ts:840](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L840)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VisitationsServicePaginationResponse"``

#### Defined in

[src/visitations.scailo_pb.ts:841](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L841)

## Methods

### clone

▸ **clone**(): [`VisitationsServicePaginationResponse`](VisitationsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`VisitationsServicePaginationResponse`](VisitationsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`VisitationsServicePaginationResponse`](VisitationsServicePaginationResponse.md) \| `PlainMessage`\<[`VisitationsServicePaginationResponse`](VisitationsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`VisitationsServicePaginationResponse`](VisitationsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VisitationsServicePaginationResponse`](VisitationsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`VisitationsServicePaginationResponse`](VisitationsServicePaginationResponse.md) \| `PlainMessage`\<[`VisitationsServicePaginationResponse`](VisitationsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`VisitationsServicePaginationResponse`](VisitationsServicePaginationResponse.md) \| `PlainMessage`\<[`VisitationsServicePaginationResponse`](VisitationsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/visitations.scailo_pb.ts:861](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L861)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VisitationsServicePaginationResponse`](VisitationsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VisitationsServicePaginationResponse`](VisitationsServicePaginationResponse.md)

#### Defined in

[src/visitations.scailo_pb.ts:849](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L849)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VisitationsServicePaginationResponse`](VisitationsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VisitationsServicePaginationResponse`](VisitationsServicePaginationResponse.md)

#### Defined in

[src/visitations.scailo_pb.ts:853](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L853)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VisitationsServicePaginationResponse`](VisitationsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VisitationsServicePaginationResponse`](VisitationsServicePaginationResponse.md)

#### Defined in

[src/visitations.scailo_pb.ts:857](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L857)
