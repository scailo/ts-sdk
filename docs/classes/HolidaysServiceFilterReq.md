[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / HolidaysServiceFilterReq

# Class: HolidaysServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.HolidaysServiceFilterReq

## Hierarchy

- `Message`\<[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)\>

  ↳ **`HolidaysServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](HolidaysServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](HolidaysServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](HolidaysServiceFilterReq.md#approvedonend)
- [approvedOnStart](HolidaysServiceFilterReq.md#approvedonstart)
- [approverRoleId](HolidaysServiceFilterReq.md#approverroleid)
- [completedOnEnd](HolidaysServiceFilterReq.md#completedonend)
- [completedOnStart](HolidaysServiceFilterReq.md#completedonstart)
- [count](HolidaysServiceFilterReq.md#count)
- [creationTimestampEnd](HolidaysServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](HolidaysServiceFilterReq.md#creationtimestampstart)
- [description](HolidaysServiceFilterReq.md#description)
- [endOnEnd](HolidaysServiceFilterReq.md#endonend)
- [endOnStart](HolidaysServiceFilterReq.md#endonstart)
- [entityUuid](HolidaysServiceFilterReq.md#entityuuid)
- [isActive](HolidaysServiceFilterReq.md#isactive)
- [modificationTimestampEnd](HolidaysServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](HolidaysServiceFilterReq.md#modificationtimestampstart)
- [offset](HolidaysServiceFilterReq.md#offset)
- [sortKey](HolidaysServiceFilterReq.md#sortkey)
- [sortOrder](HolidaysServiceFilterReq.md#sortorder)
- [startOnEnd](HolidaysServiceFilterReq.md#startonend)
- [startOnStart](HolidaysServiceFilterReq.md#startonstart)
- [status](HolidaysServiceFilterReq.md#status)
- [title](HolidaysServiceFilterReq.md#title)
- [fields](HolidaysServiceFilterReq.md#fields)
- [runtime](HolidaysServiceFilterReq.md#runtime)
- [typeName](HolidaysServiceFilterReq.md#typename)

### Methods

- [clone](HolidaysServiceFilterReq.md#clone)
- [equals](HolidaysServiceFilterReq.md#equals)
- [fromBinary](HolidaysServiceFilterReq.md#frombinary)
- [fromJson](HolidaysServiceFilterReq.md#fromjson)
- [fromJsonString](HolidaysServiceFilterReq.md#fromjsonstring)
- [getType](HolidaysServiceFilterReq.md#gettype)
- [toBinary](HolidaysServiceFilterReq.md#tobinary)
- [toJSON](HolidaysServiceFilterReq.md#tojson)
- [toJson](HolidaysServiceFilterReq.md#tojson-1)
- [toJsonString](HolidaysServiceFilterReq.md#tojsonstring)
- [equals](HolidaysServiceFilterReq.md#equals-1)
- [fromBinary](HolidaysServiceFilterReq.md#frombinary-1)
- [fromJson](HolidaysServiceFilterReq.md#fromjson-1)
- [fromJsonString](HolidaysServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new HolidaysServiceFilterReq**(`data?`): [`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)\> |

#### Returns

[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

#### Overrides

Message\&lt;HolidaysServiceFilterReq\&gt;.constructor

#### Defined in

[src/holidays.scailo_pb.ts:1373](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1373)

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

[src/holidays.scailo_pb.ts:1281](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1281)

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

[src/holidays.scailo_pb.ts:1265](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1265)

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

[src/holidays.scailo_pb.ts:1249](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1249)

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

[src/holidays.scailo_pb.ts:1297](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1297)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

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

from field: uint64 completed_on_end = 16;

#### Defined in

[src/holidays.scailo_pb.ts:1329](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1329)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

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

from field: uint64 completed_on_start = 15;

#### Defined in

[src/holidays.scailo_pb.ts:1313](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1313)

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

[src/holidays.scailo_pb.ts:1103](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1103)

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

[src/holidays.scailo_pb.ts:1173](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1173)

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

[src/holidays.scailo_pb.ts:1157](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1157)

___

### description

• **description**: `string` = `""`

The description of the holiday

**`Generated`**

from field: string description = 21;

#### Defined in

[src/holidays.scailo_pb.ts:1343](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1343)

___

### endOnEnd

• **endOnEnd**: `bigint` = `protoInt64.zero`

The end range of end timestamp

**`Generated`**

from field: uint64 end_on_end = 25;

#### Defined in

[src/holidays.scailo_pb.ts:1371](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1371)

___

### endOnStart

• **endOnStart**: `bigint` = `protoInt64.zero`

The start range of end timestamp

**`Generated`**

from field: uint64 end_on_start = 24;

#### Defined in

[src/holidays.scailo_pb.ts:1364](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1364)

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

[src/holidays.scailo_pb.ts:1221](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1221)

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

[src/holidays.scailo_pb.ts:1087](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1087)

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

[src/holidays.scailo_pb.ts:1205](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1205)

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

[src/holidays.scailo_pb.ts:1189](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1189)

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

[src/holidays.scailo_pb.ts:1119](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1119)

___

### sortKey

• **sortKey**: [`HOLIDAY_SORT_KEY`](../enums/HOLIDAY_SORT_KEY.md) = `HOLIDAY_SORT_KEY.HOLIDAY_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.HOLIDAY_SORT_KEY sort_key = 5;

#### Defined in

[src/holidays.scailo_pb.ts:1141](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1141)

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

[src/holidays.scailo_pb.ts:1131](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1131)

___

### startOnEnd

• **startOnEnd**: `bigint` = `protoInt64.zero`

The end range of start timestamp

**`Generated`**

from field: uint64 start_on_end = 23;

#### Defined in

[src/holidays.scailo_pb.ts:1357](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1357)

___

### startOnStart

• **startOnStart**: `bigint` = `protoInt64.zero`

The start range of start timestamp

**`Generated`**

from field: uint64 start_on_start = 22;

#### Defined in

[src/holidays.scailo_pb.ts:1350](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1350)

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

[src/holidays.scailo_pb.ts:1233](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1233)

___

### title

• **title**: `string` = `""`

The title of the holiday

**`Generated`**

from field: string title = 20;

#### Defined in

[src/holidays.scailo_pb.ts:1336](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1336)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/holidays.scailo_pb.ts:1380](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1380)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/holidays.scailo_pb.ts:1378](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1378)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.HolidaysServiceFilterReq"``

#### Defined in

[src/holidays.scailo_pb.ts:1379](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1379)

## Methods

### clone

▸ **clone**(): [`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

Create a deep copy.

#### Returns

[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md) \| `PlainMessage`\<[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md) \| `PlainMessage`\<[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)\> |
| `b` | `undefined` \| [`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md) \| `PlainMessage`\<[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/holidays.scailo_pb.ts:1418](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1418)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

#### Defined in

[src/holidays.scailo_pb.ts:1406](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1406)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

#### Defined in

[src/holidays.scailo_pb.ts:1410](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1410)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

#### Defined in

[src/holidays.scailo_pb.ts:1414](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/holidays.scailo_pb.ts#L1414)
