[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssociatesServiceSearchAllReq

# Class: AssociatesServiceSearchAllReq

Describes the request payload for performing a generic search operation on associates

**`Generated`**

from message Scailo.AssociatesServiceSearchAllReq

## Hierarchy

- `Message`\<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\>

  ↳ **`AssociatesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](AssociatesServiceSearchAllReq.md#constructor)

### Properties

- [count](AssociatesServiceSearchAllReq.md#count)
- [entityUuid](AssociatesServiceSearchAllReq.md#entityuuid)
- [isActive](AssociatesServiceSearchAllReq.md#isactive)
- [offset](AssociatesServiceSearchAllReq.md#offset)
- [orgRefFrom](AssociatesServiceSearchAllReq.md#orgreffrom)
- [orgRefId](AssociatesServiceSearchAllReq.md#orgrefid)
- [searchKey](AssociatesServiceSearchAllReq.md#searchkey)
- [sortKey](AssociatesServiceSearchAllReq.md#sortkey)
- [sortOrder](AssociatesServiceSearchAllReq.md#sortorder)
- [fields](AssociatesServiceSearchAllReq.md#fields)
- [runtime](AssociatesServiceSearchAllReq.md#runtime)
- [typeName](AssociatesServiceSearchAllReq.md#typename)

### Methods

- [clone](AssociatesServiceSearchAllReq.md#clone)
- [equals](AssociatesServiceSearchAllReq.md#equals)
- [fromBinary](AssociatesServiceSearchAllReq.md#frombinary)
- [fromJson](AssociatesServiceSearchAllReq.md#fromjson)
- [fromJsonString](AssociatesServiceSearchAllReq.md#fromjsonstring)
- [getType](AssociatesServiceSearchAllReq.md#gettype)
- [toBinary](AssociatesServiceSearchAllReq.md#tobinary)
- [toJSON](AssociatesServiceSearchAllReq.md#tojson)
- [toJson](AssociatesServiceSearchAllReq.md#tojson-1)
- [toJsonString](AssociatesServiceSearchAllReq.md#tojsonstring)
- [equals](AssociatesServiceSearchAllReq.md#equals-1)
- [fromBinary](AssociatesServiceSearchAllReq.md#frombinary-1)
- [fromJson](AssociatesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](AssociatesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssociatesServiceSearchAllReq**(`data?`): [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\> |

#### Returns

[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Overrides

Message\&lt;AssociatesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/associates.scailo_pb.ts:1392](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1392)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/associates.scailo_pb.ts:1341](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1341)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter associates

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/associates.scailo_pb.ts:1369](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1369)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/associates.scailo_pb.ts:1334](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1334)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/associates.scailo_pb.ts:1348](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1348)

___

### orgRefFrom

• **orgRefFrom**: [`ASSOCIATE_ORG_REF_FROM`](../enums/ASSOCIATE_ORG_REF_FROM.md) = `ASSOCIATE_ORG_REF_FROM.ASSOCIATE_ORG_REF_FROM_ANY_UNSPECIFIED`

The association with a vendor or a client

**`Generated`**

from field: Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;

#### Defined in

[src/associates.scailo_pb.ts:1383](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1383)

___

### orgRefId

• **orgRefId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor or client

**`Generated`**

from field: uint64 org_ref_id = 14;

#### Defined in

[src/associates.scailo_pb.ts:1390](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1390)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 10;

#### Defined in

[src/associates.scailo_pb.ts:1376](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1376)

___

### sortKey

• **sortKey**: [`ASSOCIATE_SORT_KEY`](../enums/ASSOCIATE_SORT_KEY.md) = `ASSOCIATE_SORT_KEY.ASSOCIATE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the response

**`Generated`**

from field: Scailo.ASSOCIATE_SORT_KEY sort_key = 5;

#### Defined in

[src/associates.scailo_pb.ts:1362](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1362)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/associates.scailo_pb.ts:1355](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1355)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/associates.scailo_pb.ts:1399](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1399)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/associates.scailo_pb.ts:1397](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1397)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssociatesServiceSearchAllReq"``

#### Defined in

[src/associates.scailo_pb.ts:1398](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1398)

## Methods

### clone

▸ **clone**(): [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md) \| `PlainMessage`\<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md) \| `PlainMessage`\<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md) \| `PlainMessage`\<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/associates.scailo_pb.ts:1423](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1423)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Defined in

[src/associates.scailo_pb.ts:1411](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1411)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Defined in

[src/associates.scailo_pb.ts:1415](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1415)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Defined in

[src/associates.scailo_pb.ts:1419](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1419)
