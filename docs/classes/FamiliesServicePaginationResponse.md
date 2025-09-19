[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServicePaginationResponse

# Class: FamiliesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.FamiliesServicePaginationResponse

## Hierarchy

- `Message`\<[`FamiliesServicePaginationResponse`](FamiliesServicePaginationResponse.md)\>

  ↳ **`FamiliesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](FamiliesServicePaginationResponse.md#constructor)

### Properties

- [count](FamiliesServicePaginationResponse.md#count)
- [offset](FamiliesServicePaginationResponse.md#offset)
- [payload](FamiliesServicePaginationResponse.md#payload)
- [total](FamiliesServicePaginationResponse.md#total)
- [fields](FamiliesServicePaginationResponse.md#fields)
- [runtime](FamiliesServicePaginationResponse.md#runtime)
- [typeName](FamiliesServicePaginationResponse.md#typename)

### Methods

- [clone](FamiliesServicePaginationResponse.md#clone)
- [equals](FamiliesServicePaginationResponse.md#equals)
- [fromBinary](FamiliesServicePaginationResponse.md#frombinary)
- [fromJson](FamiliesServicePaginationResponse.md#fromjson)
- [fromJsonString](FamiliesServicePaginationResponse.md#fromjsonstring)
- [getType](FamiliesServicePaginationResponse.md#gettype)
- [toBinary](FamiliesServicePaginationResponse.md#tobinary)
- [toJSON](FamiliesServicePaginationResponse.md#tojson)
- [toJson](FamiliesServicePaginationResponse.md#tojson-1)
- [toJsonString](FamiliesServicePaginationResponse.md#tojsonstring)
- [equals](FamiliesServicePaginationResponse.md#equals-1)
- [fromBinary](FamiliesServicePaginationResponse.md#frombinary-1)
- [fromJson](FamiliesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](FamiliesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamiliesServicePaginationResponse**(`data?`): [`FamiliesServicePaginationResponse`](FamiliesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamiliesServicePaginationResponse`](FamiliesServicePaginationResponse.md)\> |

#### Returns

[`FamiliesServicePaginationResponse`](FamiliesServicePaginationResponse.md)

#### Overrides

Message\&lt;FamiliesServicePaginationResponse\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:1051](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1051)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/families.scailo_pb.ts:1028](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1028)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/families.scailo_pb.ts:1035](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1035)

___

### payload

• **payload**: [`Family`](Family.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.Family payload = 4;

#### Defined in

[src/families.scailo_pb.ts:1049](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1049)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/families.scailo_pb.ts:1042](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1042)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:1058](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1058)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:1056](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1056)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServicePaginationResponse"``

#### Defined in

[src/families.scailo_pb.ts:1057](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1057)

## Methods

### clone

▸ **clone**(): [`FamiliesServicePaginationResponse`](FamiliesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`FamiliesServicePaginationResponse`](FamiliesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`FamiliesServicePaginationResponse`](FamiliesServicePaginationResponse.md) \| `PlainMessage`\<[`FamiliesServicePaginationResponse`](FamiliesServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamiliesServicePaginationResponse`](FamiliesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamiliesServicePaginationResponse`](FamiliesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`FamiliesServicePaginationResponse`](FamiliesServicePaginationResponse.md) \| `PlainMessage`\<[`FamiliesServicePaginationResponse`](FamiliesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`FamiliesServicePaginationResponse`](FamiliesServicePaginationResponse.md) \| `PlainMessage`\<[`FamiliesServicePaginationResponse`](FamiliesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:1077](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1077)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamiliesServicePaginationResponse`](FamiliesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamiliesServicePaginationResponse`](FamiliesServicePaginationResponse.md)

#### Defined in

[src/families.scailo_pb.ts:1065](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1065)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamiliesServicePaginationResponse`](FamiliesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServicePaginationResponse`](FamiliesServicePaginationResponse.md)

#### Defined in

[src/families.scailo_pb.ts:1069](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1069)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamiliesServicePaginationResponse`](FamiliesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServicePaginationResponse`](FamiliesServicePaginationResponse.md)

#### Defined in

[src/families.scailo_pb.ts:1073](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1073)
