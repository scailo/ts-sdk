[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsFamiliesServicePaginatedItemsResponse

# Class: EquationsFamiliesServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.EquationsFamiliesServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`EquationsFamiliesServicePaginatedItemsResponse`](EquationsFamiliesServicePaginatedItemsResponse.md)\>

  ↳ **`EquationsFamiliesServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](EquationsFamiliesServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](EquationsFamiliesServicePaginatedItemsResponse.md#count)
- [offset](EquationsFamiliesServicePaginatedItemsResponse.md#offset)
- [payload](EquationsFamiliesServicePaginatedItemsResponse.md#payload)
- [total](EquationsFamiliesServicePaginatedItemsResponse.md#total)
- [fields](EquationsFamiliesServicePaginatedItemsResponse.md#fields)
- [runtime](EquationsFamiliesServicePaginatedItemsResponse.md#runtime)
- [typeName](EquationsFamiliesServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](EquationsFamiliesServicePaginatedItemsResponse.md#clone)
- [equals](EquationsFamiliesServicePaginatedItemsResponse.md#equals)
- [fromBinary](EquationsFamiliesServicePaginatedItemsResponse.md#frombinary)
- [fromJson](EquationsFamiliesServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](EquationsFamiliesServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](EquationsFamiliesServicePaginatedItemsResponse.md#gettype)
- [toBinary](EquationsFamiliesServicePaginatedItemsResponse.md#tobinary)
- [toJSON](EquationsFamiliesServicePaginatedItemsResponse.md#tojson)
- [toJson](EquationsFamiliesServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](EquationsFamiliesServicePaginatedItemsResponse.md#tojsonstring)
- [equals](EquationsFamiliesServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](EquationsFamiliesServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](EquationsFamiliesServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](EquationsFamiliesServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsFamiliesServicePaginatedItemsResponse**(`data?`): [`EquationsFamiliesServicePaginatedItemsResponse`](EquationsFamiliesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsFamiliesServicePaginatedItemsResponse`](EquationsFamiliesServicePaginatedItemsResponse.md)\> |

#### Returns

[`EquationsFamiliesServicePaginatedItemsResponse`](EquationsFamiliesServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;EquationsFamiliesServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

[src/equations_families.scailo_pb.ts:1090](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L1090)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/equations_families.scailo_pb.ts:1067](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L1067)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/equations_families.scailo_pb.ts:1074](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L1074)

___

### payload

• **payload**: [`EquationFamilyItem`](EquationFamilyItem.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.EquationFamilyItem payload = 4;

#### Defined in

[src/equations_families.scailo_pb.ts:1088](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L1088)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/equations_families.scailo_pb.ts:1081](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L1081)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_families.scailo_pb.ts:1097](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L1097)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_families.scailo_pb.ts:1095](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L1095)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsFamiliesServicePaginatedItemsResponse"``

#### Defined in

[src/equations_families.scailo_pb.ts:1096](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L1096)

## Methods

### clone

▸ **clone**(): [`EquationsFamiliesServicePaginatedItemsResponse`](EquationsFamiliesServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`EquationsFamiliesServicePaginatedItemsResponse`](EquationsFamiliesServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsFamiliesServicePaginatedItemsResponse`](EquationsFamiliesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`EquationsFamiliesServicePaginatedItemsResponse`](EquationsFamiliesServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsFamiliesServicePaginatedItemsResponse`](EquationsFamiliesServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsFamiliesServicePaginatedItemsResponse`](EquationsFamiliesServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`EquationsFamiliesServicePaginatedItemsResponse`](EquationsFamiliesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`EquationsFamiliesServicePaginatedItemsResponse`](EquationsFamiliesServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`EquationsFamiliesServicePaginatedItemsResponse`](EquationsFamiliesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`EquationsFamiliesServicePaginatedItemsResponse`](EquationsFamiliesServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_families.scailo_pb.ts:1116](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L1116)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsFamiliesServicePaginatedItemsResponse`](EquationsFamiliesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsFamiliesServicePaginatedItemsResponse`](EquationsFamiliesServicePaginatedItemsResponse.md)

#### Defined in

[src/equations_families.scailo_pb.ts:1104](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L1104)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsFamiliesServicePaginatedItemsResponse`](EquationsFamiliesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServicePaginatedItemsResponse`](EquationsFamiliesServicePaginatedItemsResponse.md)

#### Defined in

[src/equations_families.scailo_pb.ts:1108](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L1108)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsFamiliesServicePaginatedItemsResponse`](EquationsFamiliesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServicePaginatedItemsResponse`](EquationsFamiliesServicePaginatedItemsResponse.md)

#### Defined in

[src/equations_families.scailo_pb.ts:1112](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L1112)
