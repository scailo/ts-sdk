[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActionsCodesServiceFilterReq

# Class: ActionsCodesServiceFilterReq

Advanced filter request for searching and paginating action codes using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

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

[src/actions_codes.scailo_pb.ts:1148](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L1148)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/actions_codes.scailo_pb.ts:1038](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L1038)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/actions_codes.scailo_pb.ts:1022](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L1022)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/actions_codes.scailo_pb.ts:1006](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L1006)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/actions_codes.scailo_pb.ts:1054](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L1054)

___

### bgColor

• **bgColor**: `string` = `""`

**`Optional`**

**`Description`**

Exact match for the Hexadecimal background (text) color.

**`Example`**

```ts
"#FF5733"
```

**`Regex`**

"^$|^#[0-9a-fA-F]{6}$"

**`Format`**

May be empty, but if provided, must be a '#' followed by exactly 6 hex characters.

**`Generated`**

from field: string bg_color = 23;

#### Defined in

[src/actions_codes.scailo_pb.ts:1118](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L1118)

___

### code

• **code**: `string` = `""`

**`Optional`**

**`Description`**

Exact match for the unique alphanumeric identifier.

**`Example`**

```ts
"TECH_SUP_01"
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string code = 21;

#### Defined in

[src/actions_codes.scailo_pb.ts:1086](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L1086)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/actions_codes.scailo_pb.ts:860](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L860)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/actions_codes.scailo_pb.ts:930](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L930)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/actions_codes.scailo_pb.ts:914](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L914)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/actions_codes.scailo_pb.ts:978](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L978)

___

### fgColor

• **fgColor**: `string` = `""`

**`Optional`**

**`Description`**

Exact match for the Hexadecimal foreground (text) color.

**`Example`**

```ts
"#FFFFFF"
```

**`Regex`**

"^$|^#[0-9a-fA-F]{6}$"

**`Format`**

May be empty, but if provided, must be a '#' followed by exactly 6 hex characters.

**`Generated`**

from field: string fg_color = 22;

#### Defined in

[src/actions_codes.scailo_pb.ts:1102](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L1102)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/actions_codes.scailo_pb.ts:844](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L844)

___

### isLeaf

• **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by the given leaf property (TRUE, FALSE, ANY)

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_leaf = 27;

#### Defined in

[src/actions_codes.scailo_pb.ts:1146](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L1146)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/actions_codes.scailo_pb.ts:962](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L962)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/actions_codes.scailo_pb.ts:946](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L946)

___

### name

• **name**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the display name.

**`Example`**

```ts
"Technical Support"
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string name = 20;

#### Defined in

[src/actions_codes.scailo_pb.ts:1070](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L1070)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/actions_codes.scailo_pb.ts:876](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L876)

___

### parentActionCodeId

• **parentActionCodeId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by specific ID of the parent action code. If this is set, then all the action codes that are associated to this parent action code are retrieved.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 parent_action_code_id = 26;

#### Defined in

[src/actions_codes.scailo_pb.ts:1134](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L1134)

___

### sortKey

• **sortKey**: [`ACTION_CODE_SORT_KEY`](../enums/ACTION_CODE_SORT_KEY.md) = `ACTION_CODE_SORT_KEY.ACTION_CODE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.ACTION_CODE_SORT_KEY sort_key = 5;

#### Defined in

[src/actions_codes.scailo_pb.ts:898](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L898)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/actions_codes.scailo_pb.ts:888](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L888)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/actions_codes.scailo_pb.ts:990](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L990)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/actions_codes.scailo_pb.ts:1155](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L1155)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/actions_codes.scailo_pb.ts:1153](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L1153)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActionsCodesServiceFilterReq"``

#### Defined in

[src/actions_codes.scailo_pb.ts:1154](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L1154)

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

[src/actions_codes.scailo_pb.ts:1191](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L1191)

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

[src/actions_codes.scailo_pb.ts:1179](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L1179)

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

[src/actions_codes.scailo_pb.ts:1183](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L1183)

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

[src/actions_codes.scailo_pb.ts:1187](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L1187)
