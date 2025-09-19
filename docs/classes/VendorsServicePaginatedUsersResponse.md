[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorsServicePaginatedUsersResponse

# Class: VendorsServicePaginatedUsersResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.VendorsServicePaginatedUsersResponse

## Hierarchy

- `Message`\<[`VendorsServicePaginatedUsersResponse`](VendorsServicePaginatedUsersResponse.md)\>

  ↳ **`VendorsServicePaginatedUsersResponse`**

## Table of contents

### Constructors

- [constructor](VendorsServicePaginatedUsersResponse.md#constructor)

### Properties

- [count](VendorsServicePaginatedUsersResponse.md#count)
- [offset](VendorsServicePaginatedUsersResponse.md#offset)
- [payload](VendorsServicePaginatedUsersResponse.md#payload)
- [total](VendorsServicePaginatedUsersResponse.md#total)
- [fields](VendorsServicePaginatedUsersResponse.md#fields)
- [runtime](VendorsServicePaginatedUsersResponse.md#runtime)
- [typeName](VendorsServicePaginatedUsersResponse.md#typename)

### Methods

- [clone](VendorsServicePaginatedUsersResponse.md#clone)
- [equals](VendorsServicePaginatedUsersResponse.md#equals)
- [fromBinary](VendorsServicePaginatedUsersResponse.md#frombinary)
- [fromJson](VendorsServicePaginatedUsersResponse.md#fromjson)
- [fromJsonString](VendorsServicePaginatedUsersResponse.md#fromjsonstring)
- [getType](VendorsServicePaginatedUsersResponse.md#gettype)
- [toBinary](VendorsServicePaginatedUsersResponse.md#tobinary)
- [toJSON](VendorsServicePaginatedUsersResponse.md#tojson)
- [toJson](VendorsServicePaginatedUsersResponse.md#tojson-1)
- [toJsonString](VendorsServicePaginatedUsersResponse.md#tojsonstring)
- [equals](VendorsServicePaginatedUsersResponse.md#equals-1)
- [fromBinary](VendorsServicePaginatedUsersResponse.md#frombinary-1)
- [fromJson](VendorsServicePaginatedUsersResponse.md#fromjson-1)
- [fromJsonString](VendorsServicePaginatedUsersResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorsServicePaginatedUsersResponse**(`data?`): [`VendorsServicePaginatedUsersResponse`](VendorsServicePaginatedUsersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorsServicePaginatedUsersResponse`](VendorsServicePaginatedUsersResponse.md)\> |

#### Returns

[`VendorsServicePaginatedUsersResponse`](VendorsServicePaginatedUsersResponse.md)

#### Overrides

Message\&lt;VendorsServicePaginatedUsersResponse\&gt;.constructor

#### Defined in

[src/vendors.scailo_pb.ts:2545](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L2545)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/vendors.scailo_pb.ts:2522](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L2522)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/vendors.scailo_pb.ts:2529](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L2529)

___

### payload

• **payload**: [`VendorUser`](VendorUser.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.VendorUser payload = 4;

#### Defined in

[src/vendors.scailo_pb.ts:2543](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L2543)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/vendors.scailo_pb.ts:2536](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L2536)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendors.scailo_pb.ts:2552](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L2552)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendors.scailo_pb.ts:2550](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L2550)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorsServicePaginatedUsersResponse"``

#### Defined in

[src/vendors.scailo_pb.ts:2551](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L2551)

## Methods

### clone

▸ **clone**(): [`VendorsServicePaginatedUsersResponse`](VendorsServicePaginatedUsersResponse.md)

Create a deep copy.

#### Returns

[`VendorsServicePaginatedUsersResponse`](VendorsServicePaginatedUsersResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorsServicePaginatedUsersResponse`](VendorsServicePaginatedUsersResponse.md) \| `PlainMessage`\<[`VendorsServicePaginatedUsersResponse`](VendorsServicePaginatedUsersResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorsServicePaginatedUsersResponse`](VendorsServicePaginatedUsersResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorsServicePaginatedUsersResponse`](VendorsServicePaginatedUsersResponse.md)\>

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
| `a` | `undefined` \| [`VendorsServicePaginatedUsersResponse`](VendorsServicePaginatedUsersResponse.md) \| `PlainMessage`\<[`VendorsServicePaginatedUsersResponse`](VendorsServicePaginatedUsersResponse.md)\> |
| `b` | `undefined` \| [`VendorsServicePaginatedUsersResponse`](VendorsServicePaginatedUsersResponse.md) \| `PlainMessage`\<[`VendorsServicePaginatedUsersResponse`](VendorsServicePaginatedUsersResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendors.scailo_pb.ts:2571](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L2571)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorsServicePaginatedUsersResponse`](VendorsServicePaginatedUsersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorsServicePaginatedUsersResponse`](VendorsServicePaginatedUsersResponse.md)

#### Defined in

[src/vendors.scailo_pb.ts:2559](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L2559)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorsServicePaginatedUsersResponse`](VendorsServicePaginatedUsersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServicePaginatedUsersResponse`](VendorsServicePaginatedUsersResponse.md)

#### Defined in

[src/vendors.scailo_pb.ts:2563](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L2563)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorsServicePaginatedUsersResponse`](VendorsServicePaginatedUsersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServicePaginatedUsersResponse`](VendorsServicePaginatedUsersResponse.md)

#### Defined in

[src/vendors.scailo_pb.ts:2567](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L2567)
