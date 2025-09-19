[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActionsCodesServiceFilterReq

# Class: ActionsCodesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.ActionsCodesServiceFilterReq

## Hierarchy

- `Message`\<[`ActionsCodesServiceFilterReq`](ActionsCodesServiceFilterReq.md)\>

  ↳ **`ActionsCodesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ActionsCodesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ActionsCodesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ActionsCodesServiceFilterReq.md#approvedonend)
- [approvedOnStart](ActionsCodesServiceFilterReq.md#approvedonstart)
- [approverRoleId](ActionsCodesServiceFilterReq.md#approverroleid)
- [bgColor](ActionsCodesServiceFilterReq.md#bgcolor)
- [code](ActionsCodesServiceFilterReq.md#code)
- [count](ActionsCodesServiceFilterReq.md#count)
- [creationTimestampEnd](ActionsCodesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ActionsCodesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](ActionsCodesServiceFilterReq.md#entityuuid)
- [fgColor](ActionsCodesServiceFilterReq.md#fgcolor)
- [isActive](ActionsCodesServiceFilterReq.md#isactive)
- [isLeaf](ActionsCodesServiceFilterReq.md#isleaf)
- [modificationTimestampEnd](ActionsCodesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ActionsCodesServiceFilterReq.md#modificationtimestampstart)
- [name](ActionsCodesServiceFilterReq.md#name)
- [offset](ActionsCodesServiceFilterReq.md#offset)
- [parentActionCodeId](ActionsCodesServiceFilterReq.md#parentactioncodeid)
- [sortKey](ActionsCodesServiceFilterReq.md#sortkey)
- [sortOrder](ActionsCodesServiceFilterReq.md#sortorder)
- [status](ActionsCodesServiceFilterReq.md#status)
- [fields](ActionsCodesServiceFilterReq.md#fields)
- [runtime](ActionsCodesServiceFilterReq.md#runtime)
- [typeName](ActionsCodesServiceFilterReq.md#typename)

### Methods

- [clone](ActionsCodesServiceFilterReq.md#clone)
- [equals](ActionsCodesServiceFilterReq.md#equals)
- [fromBinary](ActionsCodesServiceFilterReq.md#frombinary)
- [fromJson](ActionsCodesServiceFilterReq.md#fromjson)
- [fromJsonString](ActionsCodesServiceFilterReq.md#fromjsonstring)
- [getType](ActionsCodesServiceFilterReq.md#gettype)
- [toBinary](ActionsCodesServiceFilterReq.md#tobinary)
- [toJSON](ActionsCodesServiceFilterReq.md#tojson)
- [toJson](ActionsCodesServiceFilterReq.md#tojson-1)
- [toJsonString](ActionsCodesServiceFilterReq.md#tojsonstring)
- [equals](ActionsCodesServiceFilterReq.md#equals-1)
- [fromBinary](ActionsCodesServiceFilterReq.md#frombinary-1)
- [fromJson](ActionsCodesServiceFilterReq.md#fromjson-1)
- [fromJsonString](ActionsCodesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActionsCodesServiceFilterReq**(`data?`): [`ActionsCodesServiceFilterReq`](ActionsCodesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActionsCodesServiceFilterReq`](ActionsCodesServiceFilterReq.md)\> |

#### Returns

[`ActionsCodesServiceFilterReq`](ActionsCodesServiceFilterReq.md)

#### Overrides

Message\&lt;ActionsCodesServiceFilterReq\&gt;.constructor

#### Defined in

[src/actions_codes.scailo_pb.ts:755](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L755)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/actions_codes.scailo_pb.ts:704](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L704)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/actions_codes.scailo_pb.ts:697](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L697)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/actions_codes.scailo_pb.ts:690](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L690)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/actions_codes.scailo_pb.ts:711](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L711)

___

### bgColor

• **bgColor**: `string` = `""`

The background color that is displayed for easy recognition

**`Generated`**

from field: string bg_color = 23;

#### Defined in

[src/actions_codes.scailo_pb.ts:739](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L739)

___

### code

• **code**: `string` = `""`

The unique code by which the action code is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/actions_codes.scailo_pb.ts:725](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L725)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/actions_codes.scailo_pb.ts:620](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L620)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/actions_codes.scailo_pb.ts:655](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L655)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/actions_codes.scailo_pb.ts:648](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L648)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/actions_codes.scailo_pb.ts:676](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L676)

___

### fgColor

• **fgColor**: `string` = `""`

The color of the text that is displayed for easy recognition

**`Generated`**

from field: string fg_color = 22;

#### Defined in

[src/actions_codes.scailo_pb.ts:732](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L732)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/actions_codes.scailo_pb.ts:613](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L613)

___

### isLeaf

• **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Filter with the given leaf property

**`Generated`**

from field: Scailo.BOOL_FILTER is_leaf = 27;

#### Defined in

[src/actions_codes.scailo_pb.ts:753](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L753)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/actions_codes.scailo_pb.ts:669](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L669)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/actions_codes.scailo_pb.ts:662](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L662)

___

### name

• **name**: `string` = `""`

The name of the action code

**`Generated`**

from field: string name = 20;

#### Defined in

[src/actions_codes.scailo_pb.ts:718](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L718)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/actions_codes.scailo_pb.ts:627](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L627)

___

### parentActionCodeId

• **parentActionCodeId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent action code (0, if the first action code that is being created is a leaf action code)

**`Generated`**

from field: uint64 parent_action_code_id = 26;

#### Defined in

[src/actions_codes.scailo_pb.ts:746](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L746)

___

### sortKey

• **sortKey**: [`ACTION_CODE_SORT_KEY`](../enums/ACTION_CODE_SORT_KEY.md) = `ACTION_CODE_SORT_KEY.ACTION_CODE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.ACTION_CODE_SORT_KEY sort_key = 5;

#### Defined in

[src/actions_codes.scailo_pb.ts:641](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L641)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/actions_codes.scailo_pb.ts:634](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L634)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this action code

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/actions_codes.scailo_pb.ts:683](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L683)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/actions_codes.scailo_pb.ts:762](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L762)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/actions_codes.scailo_pb.ts:760](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L760)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActionsCodesServiceFilterReq"``

#### Defined in

[src/actions_codes.scailo_pb.ts:761](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L761)

## Methods

### clone

▸ **clone**(): [`ActionsCodesServiceFilterReq`](ActionsCodesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ActionsCodesServiceFilterReq`](ActionsCodesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ActionsCodesServiceFilterReq`](ActionsCodesServiceFilterReq.md) \| `PlainMessage`\<[`ActionsCodesServiceFilterReq`](ActionsCodesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActionsCodesServiceFilterReq`](ActionsCodesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActionsCodesServiceFilterReq`](ActionsCodesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ActionsCodesServiceFilterReq`](ActionsCodesServiceFilterReq.md) \| `PlainMessage`\<[`ActionsCodesServiceFilterReq`](ActionsCodesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ActionsCodesServiceFilterReq`](ActionsCodesServiceFilterReq.md) \| `PlainMessage`\<[`ActionsCodesServiceFilterReq`](ActionsCodesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/actions_codes.scailo_pb.ts:798](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L798)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActionsCodesServiceFilterReq`](ActionsCodesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActionsCodesServiceFilterReq`](ActionsCodesServiceFilterReq.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:786](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L786)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActionsCodesServiceFilterReq`](ActionsCodesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActionsCodesServiceFilterReq`](ActionsCodesServiceFilterReq.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:790](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L790)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActionsCodesServiceFilterReq`](ActionsCodesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActionsCodesServiceFilterReq`](ActionsCodesServiceFilterReq.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:794](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L794)
