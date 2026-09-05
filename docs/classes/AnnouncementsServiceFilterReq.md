[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AnnouncementsServiceFilterReq

# Class: AnnouncementsServiceFilterReq

Advanced filter request for searching and paginating announcements using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.AnnouncementsServiceFilterReq

## Hierarchy

- `Message`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\>

  ↳ **`AnnouncementsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](AnnouncementsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](AnnouncementsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](AnnouncementsServiceFilterReq.md#approvedonend)
- [approvedOnStart](AnnouncementsServiceFilterReq.md#approvedonstart)
- [approverRoleId](AnnouncementsServiceFilterReq.md#approverroleid)
- [completedOnEnd](AnnouncementsServiceFilterReq.md#completedonend)
- [completedOnStart](AnnouncementsServiceFilterReq.md#completedonstart)
- [count](AnnouncementsServiceFilterReq.md#count)
- [creationTimestampEnd](AnnouncementsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](AnnouncementsServiceFilterReq.md#creationtimestampstart)
- [description](AnnouncementsServiceFilterReq.md#description)
- [endOnEnd](AnnouncementsServiceFilterReq.md#endonend)
- [endOnStart](AnnouncementsServiceFilterReq.md#endonstart)
- [entityUuid](AnnouncementsServiceFilterReq.md#entityuuid)
- [isActive](AnnouncementsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](AnnouncementsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](AnnouncementsServiceFilterReq.md#modificationtimestampstart)
- [offset](AnnouncementsServiceFilterReq.md#offset)
- [sortKey](AnnouncementsServiceFilterReq.md#sortkey)
- [sortOrder](AnnouncementsServiceFilterReq.md#sortorder)
- [startOnEnd](AnnouncementsServiceFilterReq.md#startonend)
- [startOnStart](AnnouncementsServiceFilterReq.md#startonstart)
- [status](AnnouncementsServiceFilterReq.md#status)
- [title](AnnouncementsServiceFilterReq.md#title)
- [fields](AnnouncementsServiceFilterReq.md#fields)
- [runtime](AnnouncementsServiceFilterReq.md#runtime)
- [typeName](AnnouncementsServiceFilterReq.md#typename)

### Methods

- [clone](AnnouncementsServiceFilterReq.md#clone)
- [equals](AnnouncementsServiceFilterReq.md#equals)
- [fromBinary](AnnouncementsServiceFilterReq.md#frombinary)
- [fromJson](AnnouncementsServiceFilterReq.md#fromjson)
- [fromJsonString](AnnouncementsServiceFilterReq.md#fromjsonstring)
- [getType](AnnouncementsServiceFilterReq.md#gettype)
- [toBinary](AnnouncementsServiceFilterReq.md#tobinary)
- [toJSON](AnnouncementsServiceFilterReq.md#tojson)
- [toJson](AnnouncementsServiceFilterReq.md#tojson-1)
- [toJsonString](AnnouncementsServiceFilterReq.md#tojsonstring)
- [equals](AnnouncementsServiceFilterReq.md#equals-1)
- [fromBinary](AnnouncementsServiceFilterReq.md#frombinary-1)
- [fromJson](AnnouncementsServiceFilterReq.md#fromjson-1)
- [fromJsonString](AnnouncementsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AnnouncementsServiceFilterReq**(`data?`): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\> |

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Overrides

Message\&lt;AnnouncementsServiceFilterReq\&gt;.constructor

#### Defined in

[src/announcements.scailo_pb.ts:1184](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L1184)

## Properties

### approvedByUserId

• `Optional` **approvedByUserId**: `bigint`

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

from field: optional uint64 approved_by_user_id = 13;

#### Defined in

[src/announcements.scailo_pb.ts:1038](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L1038)

___

### approvedOnEnd

• `Optional` **approvedOnEnd**: `bigint`

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

from field: optional uint64 approved_on_end = 12;

#### Defined in

[src/announcements.scailo_pb.ts:1022](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L1022)

___

### approvedOnStart

• `Optional` **approvedOnStart**: `bigint`

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

from field: optional uint64 approved_on_start = 11;

#### Defined in

[src/announcements.scailo_pb.ts:1006](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L1006)

___

### approverRoleId

• `Optional` **approverRoleId**: `bigint`

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

from field: optional uint64 approver_role_id = 14;

#### Defined in

[src/announcements.scailo_pb.ts:1054](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L1054)

___

### completedOnEnd

• `Optional` **completedOnEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records completed ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 completed_on_end = 16;

#### Defined in

[src/announcements.scailo_pb.ts:1086](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L1086)

___

### completedOnStart

• `Optional` **completedOnStart**: `bigint`

**`Optional`**

**`Description`**

Filter records completed ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 completed_on_start = 15;

#### Defined in

[src/announcements.scailo_pb.ts:1070](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L1070)

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

[src/announcements.scailo_pb.ts:860](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L860)

___

### creationTimestampEnd

• `Optional` **creationTimestampEnd**: `bigint`

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

from field: optional uint64 creation_timestamp_end = 102;

#### Defined in

[src/announcements.scailo_pb.ts:930](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L930)

___

### creationTimestampStart

• `Optional` **creationTimestampStart**: `bigint`

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

from field: optional uint64 creation_timestamp_start = 101;

#### Defined in

[src/announcements.scailo_pb.ts:914](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L914)

___

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

Filter by the announcement's main body or description text. Typically supports partial matching or substring searches.

**`Example`**

```ts
"database will be offline"
```

**`Regex`**

^[0-9A-Za-z ]+$

**`Format`**

Alphanumeric characters and spaces only.

**`Generated`**

from field: optional string description = 21;

#### Defined in

[src/announcements.scailo_pb.ts:1118](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L1118)

___

### endOnEnd

• `Optional` **endOnEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records where the announcement's expiration date is ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1783555200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer representing epoch time.

**`Generated`**

from field: optional uint64 end_on_end = 25;

#### Defined in

[src/announcements.scailo_pb.ts:1182](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L1182)

___

### endOnStart

• `Optional` **endOnStart**: `bigint`

**`Optional`**

**`Description`**

Filter records where the announcement's expiration date is ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1783468800
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer representing epoch time.

**`Generated`**

from field: optional uint64 end_on_start = 24;

#### Defined in

[src/announcements.scailo_pb.ts:1166](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L1166)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 8;

#### Defined in

[src/announcements.scailo_pb.ts:978](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L978)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/announcements.scailo_pb.ts:844](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L844)

___

### modificationTimestampEnd

• `Optional` **modificationTimestampEnd**: `bigint`

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

from field: optional uint64 modification_timestamp_end = 104;

#### Defined in

[src/announcements.scailo_pb.ts:962](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L962)

___

### modificationTimestampStart

• `Optional` **modificationTimestampStart**: `bigint`

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

from field: optional uint64 modification_timestamp_start = 103;

#### Defined in

[src/announcements.scailo_pb.ts:946](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L946)

___

### offset

• `Optional` **offset**: `bigint`

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

from field: optional uint64 offset = 3;

#### Defined in

[src/announcements.scailo_pb.ts:876](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L876)

___

### sortKey

• `Optional` **sortKey**: [`ANNOUNCEMENT_SORT_KEY`](../enums/ANNOUNCEMENT_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.ANNOUNCEMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/announcements.scailo_pb.ts:898](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L898)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/announcements.scailo_pb.ts:888](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L888)

___

### startOnEnd

• `Optional` **startOnEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records where the announcement's start publication date is ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1783468800
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer representing epoch time.

**`Generated`**

from field: optional uint64 start_on_end = 23;

#### Defined in

[src/announcements.scailo_pb.ts:1150](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L1150)

___

### startOnStart

• `Optional` **startOnStart**: `bigint`

**`Optional`**

**`Description`**

Filter records where the announcement's start publication date is ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1783382400
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer representing epoch time.

**`Generated`**

from field: optional uint64 start_on_start = 22;

#### Defined in

[src/announcements.scailo_pb.ts:1134](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L1134)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/announcements.scailo_pb.ts:990](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L990)

___

### title

• `Optional` **title**: `string`

**`Optional`**

**`Description`**

Filter by the announcement's title. Typically supports partial matching or substring searches.

**`Example`**

```ts
"System Maintenance"
```

**`Regex`**

^[0-9A-Za-z ]+$

**`Format`**

Alphanumeric characters and spaces only.

**`Generated`**

from field: optional string title = 20;

#### Defined in

[src/announcements.scailo_pb.ts:1102](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L1102)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/announcements.scailo_pb.ts:1191](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L1191)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/announcements.scailo_pb.ts:1189](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L1189)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AnnouncementsServiceFilterReq"``

#### Defined in

[src/announcements.scailo_pb.ts:1190](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L1190)

## Methods

### clone

▸ **clone**(): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md) \| `PlainMessage`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md) \| `PlainMessage`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md) \| `PlainMessage`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/announcements.scailo_pb.ts:1229](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L1229)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Defined in

[src/announcements.scailo_pb.ts:1217](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L1217)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Defined in

[src/announcements.scailo_pb.ts:1221](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L1221)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Defined in

[src/announcements.scailo_pb.ts:1225](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L1225)
