[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActionsCodesServiceSearchAllReq

# Class: ActionsCodesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.ActionsCodesServiceSearchAllReq

## Hierarchy

- `Message`\<[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)\>

  ↳ **`ActionsCodesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ActionsCodesServiceSearchAllReq.md#constructor)

### Properties

- [count](ActionsCodesServiceSearchAllReq.md#count)
- [entityUuid](ActionsCodesServiceSearchAllReq.md#entityuuid)
- [isActive](ActionsCodesServiceSearchAllReq.md#isactive)
- [isLeaf](ActionsCodesServiceSearchAllReq.md#isleaf)
- [offset](ActionsCodesServiceSearchAllReq.md#offset)
- [parentActionCodeId](ActionsCodesServiceSearchAllReq.md#parentactioncodeid)
- [searchKey](ActionsCodesServiceSearchAllReq.md#searchkey)
- [sortKey](ActionsCodesServiceSearchAllReq.md#sortkey)
- [sortOrder](ActionsCodesServiceSearchAllReq.md#sortorder)
- [status](ActionsCodesServiceSearchAllReq.md#status)
- [fields](ActionsCodesServiceSearchAllReq.md#fields)
- [runtime](ActionsCodesServiceSearchAllReq.md#runtime)
- [typeName](ActionsCodesServiceSearchAllReq.md#typename)

### Methods

- [clone](ActionsCodesServiceSearchAllReq.md#clone)
- [equals](ActionsCodesServiceSearchAllReq.md#equals)
- [fromBinary](ActionsCodesServiceSearchAllReq.md#frombinary)
- [fromJson](ActionsCodesServiceSearchAllReq.md#fromjson)
- [fromJsonString](ActionsCodesServiceSearchAllReq.md#fromjsonstring)
- [getType](ActionsCodesServiceSearchAllReq.md#gettype)
- [toBinary](ActionsCodesServiceSearchAllReq.md#tobinary)
- [toJSON](ActionsCodesServiceSearchAllReq.md#tojson)
- [toJson](ActionsCodesServiceSearchAllReq.md#tojson-1)
- [toJsonString](ActionsCodesServiceSearchAllReq.md#tojsonstring)
- [equals](ActionsCodesServiceSearchAllReq.md#equals-1)
- [fromBinary](ActionsCodesServiceSearchAllReq.md#frombinary-1)
- [fromJson](ActionsCodesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ActionsCodesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActionsCodesServiceSearchAllReq**(`data?`): [`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)\> |

#### Returns

[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)

#### Overrides

Message\&lt;ActionsCodesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/actions_codes.scailo_pb.ts:1050](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L1050)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/actions_codes.scailo_pb.ts:992](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L992)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/actions_codes.scailo_pb.ts:1020](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L1020)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/actions_codes.scailo_pb.ts:985](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L985)

___

### isLeaf

• **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Filter with the given leaf property

**`Generated`**

from field: Scailo.BOOL_FILTER is_leaf = 26;

#### Defined in

[src/actions_codes.scailo_pb.ts:1048](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L1048)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/actions_codes.scailo_pb.ts:999](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L999)

___

### parentActionCodeId

• **parentActionCodeId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent action code (0, if the first action code that is being created is a leaf action code)

**`Generated`**

from field: uint64 parent_action_code_id = 25;

#### Defined in

[src/actions_codes.scailo_pb.ts:1041](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L1041)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/actions_codes.scailo_pb.ts:1034](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L1034)

___

### sortKey

• **sortKey**: [`ACTION_CODE_SORT_KEY`](../enums/ACTION_CODE_SORT_KEY.md) = `ACTION_CODE_SORT_KEY.ACTION_CODE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.ACTION_CODE_SORT_KEY sort_key = 5;

#### Defined in

[src/actions_codes.scailo_pb.ts:1013](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L1013)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/actions_codes.scailo_pb.ts:1006](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L1006)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/actions_codes.scailo_pb.ts:1027](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L1027)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/actions_codes.scailo_pb.ts:1057](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L1057)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/actions_codes.scailo_pb.ts:1055](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L1055)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActionsCodesServiceSearchAllReq"``

#### Defined in

[src/actions_codes.scailo_pb.ts:1056](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L1056)

## Methods

### clone

▸ **clone**(): [`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md) \| `PlainMessage`\<[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md) \| `PlainMessage`\<[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md) \| `PlainMessage`\<[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/actions_codes.scailo_pb.ts:1082](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L1082)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:1070](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L1070)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:1074](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L1074)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:1078](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L1078)
