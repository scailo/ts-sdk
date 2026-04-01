[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingsServiceSearchAllReq

# Class: MeetingsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.MeetingsServiceSearchAllReq

## Hierarchy

- `Message`\<[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)\>

  ↳ **`MeetingsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](MeetingsServiceSearchAllReq.md#constructor)

### Properties

- [activityTagId](MeetingsServiceSearchAllReq.md#activitytagid)
- [associateId](MeetingsServiceSearchAllReq.md#associateid)
- [count](MeetingsServiceSearchAllReq.md#count)
- [employeeId](MeetingsServiceSearchAllReq.md#employeeid)
- [entityUuid](MeetingsServiceSearchAllReq.md#entityuuid)
- [isActive](MeetingsServiceSearchAllReq.md#isactive)
- [offset](MeetingsServiceSearchAllReq.md#offset)
- [searchKey](MeetingsServiceSearchAllReq.md#searchkey)
- [sortKey](MeetingsServiceSearchAllReq.md#sortkey)
- [sortOrder](MeetingsServiceSearchAllReq.md#sortorder)
- [status](MeetingsServiceSearchAllReq.md#status)
- [fields](MeetingsServiceSearchAllReq.md#fields)
- [runtime](MeetingsServiceSearchAllReq.md#runtime)
- [typeName](MeetingsServiceSearchAllReq.md#typename)

### Methods

- [clone](MeetingsServiceSearchAllReq.md#clone)
- [equals](MeetingsServiceSearchAllReq.md#equals)
- [fromBinary](MeetingsServiceSearchAllReq.md#frombinary)
- [fromJson](MeetingsServiceSearchAllReq.md#fromjson)
- [fromJsonString](MeetingsServiceSearchAllReq.md#fromjsonstring)
- [getType](MeetingsServiceSearchAllReq.md#gettype)
- [toBinary](MeetingsServiceSearchAllReq.md#tobinary)
- [toJSON](MeetingsServiceSearchAllReq.md#tojson)
- [toJson](MeetingsServiceSearchAllReq.md#tojson-1)
- [toJsonString](MeetingsServiceSearchAllReq.md#tojsonstring)
- [equals](MeetingsServiceSearchAllReq.md#equals-1)
- [fromBinary](MeetingsServiceSearchAllReq.md#frombinary-1)
- [fromJson](MeetingsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](MeetingsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingsServiceSearchAllReq**(`data?`): [`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)\> |

#### Returns

[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)

#### Overrides

Message\&lt;MeetingsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/meetings.scailo_pb.ts:1598](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/meetings.scailo_pb.ts#L1598)

## Properties

### activityTagId

• **activityTagId**: `bigint` = `protoInt64.zero`

Return all the meetings that have the following activity tag as part of the actionables

**`Generated`**

from field: uint64 activity_tag_id = 42;

#### Defined in

[src/meetings.scailo_pb.ts:1596](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/meetings.scailo_pb.ts#L1596)

___

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

Return all the meetings that the given associate is a part of

**`Generated`**

from field: uint64 associate_id = 41;

#### Defined in

[src/meetings.scailo_pb.ts:1589](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/meetings.scailo_pb.ts#L1589)

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

[src/meetings.scailo_pb.ts:1498](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/meetings.scailo_pb.ts#L1498)

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

Return all the meetings that the given employee is a part of

**`Generated`**

from field: uint64 employee_id = 40;

#### Defined in

[src/meetings.scailo_pb.ts:1582](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/meetings.scailo_pb.ts#L1582)

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

from field: string entity_uuid = 6;

#### Defined in

[src/meetings.scailo_pb.ts:1552](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/meetings.scailo_pb.ts#L1552)

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

[src/meetings.scailo_pb.ts:1482](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/meetings.scailo_pb.ts#L1482)

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

[src/meetings.scailo_pb.ts:1514](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/meetings.scailo_pb.ts#L1514)

___

### searchKey

• **searchKey**: `string` = `""`

**`Mandatory`**

**`Description`**

The search string to match against reference IDs.

**`Example`**

```ts
"Medical 2023"
```

**`Regex`**

.*

@format: May contain any UTF-8 characters.

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/meetings.scailo_pb.ts:1575](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/meetings.scailo_pb.ts#L1575)

___

### sortKey

• **sortKey**: [`MEETING_SORT_KEY`](../enums/MEETING_SORT_KEY.md) = `MEETING_SORT_KEY.MEETING_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.MEETING_SORT_KEY sort_key = 5;

#### Defined in

[src/meetings.scailo_pb.ts:1536](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/meetings.scailo_pb.ts#L1536)

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

[src/meetings.scailo_pb.ts:1526](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/meetings.scailo_pb.ts#L1526)

___

### status

• **status**: [`MEETING_LIFECYCLE`](../enums/MEETING_LIFECYCLE.md) = `MEETING_LIFECYCLE.MEETING_LIFECYCLE_ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.MEETING_LIFECYCLE status = 10;

#### Defined in

[src/meetings.scailo_pb.ts:1559](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/meetings.scailo_pb.ts#L1559)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/meetings.scailo_pb.ts:1605](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/meetings.scailo_pb.ts#L1605)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/meetings.scailo_pb.ts:1603](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/meetings.scailo_pb.ts#L1603)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingsServiceSearchAllReq"``

#### Defined in

[src/meetings.scailo_pb.ts:1604](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/meetings.scailo_pb.ts#L1604)

## Methods

### clone

▸ **clone**(): [`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md) \| `PlainMessage`\<[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md) \| `PlainMessage`\<[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md) \| `PlainMessage`\<[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/meetings.scailo_pb.ts:1631](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/meetings.scailo_pb.ts#L1631)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)

#### Defined in

[src/meetings.scailo_pb.ts:1619](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/meetings.scailo_pb.ts#L1619)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)

#### Defined in

[src/meetings.scailo_pb.ts:1623](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/meetings.scailo_pb.ts#L1623)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)

#### Defined in

[src/meetings.scailo_pb.ts:1627](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/meetings.scailo_pb.ts#L1627)
