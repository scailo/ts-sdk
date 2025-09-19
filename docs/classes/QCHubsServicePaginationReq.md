[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCHubsServicePaginationReq

# Class: QCHubsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.QCHubsServicePaginationReq

## Hierarchy

- `Message`\<[`QCHubsServicePaginationReq`](QCHubsServicePaginationReq.md)\>

  ↳ **`QCHubsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](QCHubsServicePaginationReq.md#constructor)

### Properties

- [count](QCHubsServicePaginationReq.md#count)
- [isActive](QCHubsServicePaginationReq.md#isactive)
- [offset](QCHubsServicePaginationReq.md#offset)
- [sortKey](QCHubsServicePaginationReq.md#sortkey)
- [sortOrder](QCHubsServicePaginationReq.md#sortorder)
- [status](QCHubsServicePaginationReq.md#status)
- [fields](QCHubsServicePaginationReq.md#fields)
- [runtime](QCHubsServicePaginationReq.md#runtime)
- [typeName](QCHubsServicePaginationReq.md#typename)

### Methods

- [clone](QCHubsServicePaginationReq.md#clone)
- [equals](QCHubsServicePaginationReq.md#equals)
- [fromBinary](QCHubsServicePaginationReq.md#frombinary)
- [fromJson](QCHubsServicePaginationReq.md#fromjson)
- [fromJsonString](QCHubsServicePaginationReq.md#fromjsonstring)
- [getType](QCHubsServicePaginationReq.md#gettype)
- [toBinary](QCHubsServicePaginationReq.md#tobinary)
- [toJSON](QCHubsServicePaginationReq.md#tojson)
- [toJson](QCHubsServicePaginationReq.md#tojson-1)
- [toJsonString](QCHubsServicePaginationReq.md#tojsonstring)
- [equals](QCHubsServicePaginationReq.md#equals-1)
- [fromBinary](QCHubsServicePaginationReq.md#frombinary-1)
- [fromJson](QCHubsServicePaginationReq.md#fromjson-1)
- [fromJsonString](QCHubsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCHubsServicePaginationReq**(`data?`): [`QCHubsServicePaginationReq`](QCHubsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCHubsServicePaginationReq`](QCHubsServicePaginationReq.md)\> |

#### Returns

[`QCHubsServicePaginationReq`](QCHubsServicePaginationReq.md)

#### Overrides

Message\&lt;QCHubsServicePaginationReq\&gt;.constructor

#### Defined in

[src/qc_hubs.scailo_pb.ts:494](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L494)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/qc_hubs.scailo_pb.ts:464](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L464)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/qc_hubs.scailo_pb.ts:457](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L457)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/qc_hubs.scailo_pb.ts:471](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L471)

___

### sortKey

• **sortKey**: [`QC_HUB_SORT_KEY`](../enums/QC_HUB_SORT_KEY.md) = `QC_HUB_SORT_KEY.QC_HUB_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.QC_HUB_SORT_KEY sort_key = 5;

#### Defined in

[src/qc_hubs.scailo_pb.ts:485](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L485)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/qc_hubs.scailo_pb.ts:478](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L478)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this qc hub

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/qc_hubs.scailo_pb.ts:492](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L492)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_hubs.scailo_pb.ts:501](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L501)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_hubs.scailo_pb.ts:499](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L499)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCHubsServicePaginationReq"``

#### Defined in

[src/qc_hubs.scailo_pb.ts:500](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L500)

## Methods

### clone

▸ **clone**(): [`QCHubsServicePaginationReq`](QCHubsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`QCHubsServicePaginationReq`](QCHubsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCHubsServicePaginationReq`](QCHubsServicePaginationReq.md) \| `PlainMessage`\<[`QCHubsServicePaginationReq`](QCHubsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCHubsServicePaginationReq`](QCHubsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCHubsServicePaginationReq`](QCHubsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`QCHubsServicePaginationReq`](QCHubsServicePaginationReq.md) \| `PlainMessage`\<[`QCHubsServicePaginationReq`](QCHubsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`QCHubsServicePaginationReq`](QCHubsServicePaginationReq.md) \| `PlainMessage`\<[`QCHubsServicePaginationReq`](QCHubsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_hubs.scailo_pb.ts:522](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L522)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCHubsServicePaginationReq`](QCHubsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCHubsServicePaginationReq`](QCHubsServicePaginationReq.md)

#### Defined in

[src/qc_hubs.scailo_pb.ts:510](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L510)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCHubsServicePaginationReq`](QCHubsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCHubsServicePaginationReq`](QCHubsServicePaginationReq.md)

#### Defined in

[src/qc_hubs.scailo_pb.ts:514](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L514)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCHubsServicePaginationReq`](QCHubsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCHubsServicePaginationReq`](QCHubsServicePaginationReq.md)

#### Defined in

[src/qc_hubs.scailo_pb.ts:518](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L518)
