[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse

# Class: InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)\>

  ↳ **`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#count)
- [offset](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#offset)
- [payload](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#payload)
- [total](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#total)
- [fields](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#fields)
- [runtime](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#runtime)
- [typeName](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#clone)
- [equals](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#equals)
- [fromBinary](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#frombinary)
- [fromJson](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#gettype)
- [toBinary](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#tobinary)
- [toJSON](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#tojson)
- [toJson](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#tojsonstring)
- [equals](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse**(`data?`): [`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1332](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1332)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1309](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1309)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1316](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1316)

___

### payload

• **payload**: [`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.InwardJobFreeIssueMaterialItem payload = 4;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1330](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1330)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1323](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1323)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1339](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1339)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1337](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1337)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse"``

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1338](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1338)

## Methods

### clone

▸ **clone**(): [`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1358](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1358)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1346](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1346)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1350](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1350)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1354](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1354)
