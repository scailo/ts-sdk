[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesTagsServiceFilterReq

# Class: ActivitiesTagsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.ActivitiesTagsServiceFilterReq

## Hierarchy

- `Message`\<[`ActivitiesTagsServiceFilterReq`](ActivitiesTagsServiceFilterReq.md)\>

  ↳ **`ActivitiesTagsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ActivitiesTagsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ActivitiesTagsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ActivitiesTagsServiceFilterReq.md#approvedonend)
- [approvedOnStart](ActivitiesTagsServiceFilterReq.md#approvedonstart)
- [approverRoleId](ActivitiesTagsServiceFilterReq.md#approverroleid)
- [bgColor](ActivitiesTagsServiceFilterReq.md#bgcolor)
- [code](ActivitiesTagsServiceFilterReq.md#code)
- [count](ActivitiesTagsServiceFilterReq.md#count)
- [creationTimestampEnd](ActivitiesTagsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ActivitiesTagsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](ActivitiesTagsServiceFilterReq.md#entityuuid)
- [fgColor](ActivitiesTagsServiceFilterReq.md#fgcolor)
- [isActive](ActivitiesTagsServiceFilterReq.md#isactive)
- [isLeaf](ActivitiesTagsServiceFilterReq.md#isleaf)
- [modificationTimestampEnd](ActivitiesTagsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ActivitiesTagsServiceFilterReq.md#modificationtimestampstart)
- [name](ActivitiesTagsServiceFilterReq.md#name)
- [offset](ActivitiesTagsServiceFilterReq.md#offset)
- [parentActivityTagId](ActivitiesTagsServiceFilterReq.md#parentactivitytagid)
- [sortKey](ActivitiesTagsServiceFilterReq.md#sortkey)
- [sortOrder](ActivitiesTagsServiceFilterReq.md#sortorder)
- [status](ActivitiesTagsServiceFilterReq.md#status)
- [fields](ActivitiesTagsServiceFilterReq.md#fields)
- [runtime](ActivitiesTagsServiceFilterReq.md#runtime)
- [typeName](ActivitiesTagsServiceFilterReq.md#typename)

### Methods

- [clone](ActivitiesTagsServiceFilterReq.md#clone)
- [equals](ActivitiesTagsServiceFilterReq.md#equals)
- [fromBinary](ActivitiesTagsServiceFilterReq.md#frombinary)
- [fromJson](ActivitiesTagsServiceFilterReq.md#fromjson)
- [fromJsonString](ActivitiesTagsServiceFilterReq.md#fromjsonstring)
- [getType](ActivitiesTagsServiceFilterReq.md#gettype)
- [toBinary](ActivitiesTagsServiceFilterReq.md#tobinary)
- [toJSON](ActivitiesTagsServiceFilterReq.md#tojson)
- [toJson](ActivitiesTagsServiceFilterReq.md#tojson-1)
- [toJsonString](ActivitiesTagsServiceFilterReq.md#tojsonstring)
- [equals](ActivitiesTagsServiceFilterReq.md#equals-1)
- [fromBinary](ActivitiesTagsServiceFilterReq.md#frombinary-1)
- [fromJson](ActivitiesTagsServiceFilterReq.md#fromjson-1)
- [fromJsonString](ActivitiesTagsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesTagsServiceFilterReq**(`data?`): [`ActivitiesTagsServiceFilterReq`](ActivitiesTagsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesTagsServiceFilterReq`](ActivitiesTagsServiceFilterReq.md)\> |

#### Returns

[`ActivitiesTagsServiceFilterReq`](ActivitiesTagsServiceFilterReq.md)

#### Overrides

Message\&lt;ActivitiesTagsServiceFilterReq\&gt;.constructor

#### Defined in

[src/activities_tags.scailo_pb.ts:925](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L925)

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

[src/activities_tags.scailo_pb.ts:865](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L865)

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

[src/activities_tags.scailo_pb.ts:849](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L849)

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

[src/activities_tags.scailo_pb.ts:833](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L833)

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

[src/activities_tags.scailo_pb.ts:881](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L881)

___

### bgColor

• **bgColor**: `string` = `""`

The background color that is displayed for easy recognition

**`Generated`**

from field: string bg_color = 23;

#### Defined in

[src/activities_tags.scailo_pb.ts:909](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L909)

___

### code

• **code**: `string` = `""`

The unique code by which the activity tag is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/activities_tags.scailo_pb.ts:895](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L895)

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

[src/activities_tags.scailo_pb.ts:687](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L687)

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

[src/activities_tags.scailo_pb.ts:757](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L757)

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

[src/activities_tags.scailo_pb.ts:741](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L741)

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

[src/activities_tags.scailo_pb.ts:805](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L805)

___

### fgColor

• **fgColor**: `string` = `""`

The color of the text that is displayed for easy recognition

**`Generated`**

from field: string fg_color = 22;

#### Defined in

[src/activities_tags.scailo_pb.ts:902](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L902)

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

[src/activities_tags.scailo_pb.ts:671](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L671)

___

### isLeaf

• **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Filter with the given leaf property

**`Generated`**

from field: Scailo.BOOL_FILTER is_leaf = 27;

#### Defined in

[src/activities_tags.scailo_pb.ts:923](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L923)

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

[src/activities_tags.scailo_pb.ts:789](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L789)

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

[src/activities_tags.scailo_pb.ts:773](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L773)

___

### name

• **name**: `string` = `""`

The name of the activity tag

**`Generated`**

from field: string name = 20;

#### Defined in

[src/activities_tags.scailo_pb.ts:888](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L888)

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

[src/activities_tags.scailo_pb.ts:703](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L703)

___

### parentActivityTagId

• **parentActivityTagId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent activity tag (0, if the first activity tag that is being created is a leaf activity tag)

**`Generated`**

from field: uint64 parent_activity_tag_id = 26;

#### Defined in

[src/activities_tags.scailo_pb.ts:916](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L916)

___

### sortKey

• **sortKey**: [`ACTIVITY_TAG_SORT_KEY`](../enums/ACTIVITY_TAG_SORT_KEY.md) = `ACTIVITY_TAG_SORT_KEY.ACTIVITY_TAG_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.ACTIVITY_TAG_SORT_KEY sort_key = 5;

#### Defined in

[src/activities_tags.scailo_pb.ts:725](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L725)

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

[src/activities_tags.scailo_pb.ts:715](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L715)

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

[src/activities_tags.scailo_pb.ts:817](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L817)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities_tags.scailo_pb.ts:932](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L932)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities_tags.scailo_pb.ts:930](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L930)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesTagsServiceFilterReq"``

#### Defined in

[src/activities_tags.scailo_pb.ts:931](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L931)

## Methods

### clone

▸ **clone**(): [`ActivitiesTagsServiceFilterReq`](ActivitiesTagsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ActivitiesTagsServiceFilterReq`](ActivitiesTagsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesTagsServiceFilterReq`](ActivitiesTagsServiceFilterReq.md) \| `PlainMessage`\<[`ActivitiesTagsServiceFilterReq`](ActivitiesTagsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesTagsServiceFilterReq`](ActivitiesTagsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesTagsServiceFilterReq`](ActivitiesTagsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ActivitiesTagsServiceFilterReq`](ActivitiesTagsServiceFilterReq.md) \| `PlainMessage`\<[`ActivitiesTagsServiceFilterReq`](ActivitiesTagsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ActivitiesTagsServiceFilterReq`](ActivitiesTagsServiceFilterReq.md) \| `PlainMessage`\<[`ActivitiesTagsServiceFilterReq`](ActivitiesTagsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities_tags.scailo_pb.ts:968](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L968)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesTagsServiceFilterReq`](ActivitiesTagsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesTagsServiceFilterReq`](ActivitiesTagsServiceFilterReq.md)

#### Defined in

[src/activities_tags.scailo_pb.ts:956](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L956)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesTagsServiceFilterReq`](ActivitiesTagsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesTagsServiceFilterReq`](ActivitiesTagsServiceFilterReq.md)

#### Defined in

[src/activities_tags.scailo_pb.ts:960](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L960)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesTagsServiceFilterReq`](ActivitiesTagsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesTagsServiceFilterReq`](ActivitiesTagsServiceFilterReq.md)

#### Defined in

[src/activities_tags.scailo_pb.ts:964](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/activities_tags.scailo_pb.ts#L964)
