[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeaveAdjustmentRecordsSearchRequest

# Class: LeaveAdjustmentRecordsSearchRequest

Describes the request payload to retrieve approved or unapproved records.

**`Generated`**

from message Scailo.LeaveAdjustmentRecordsSearchRequest

## Hierarchy

- `Message`\<[`LeaveAdjustmentRecordsSearchRequest`](LeaveAdjustmentRecordsSearchRequest.md)\>

  ↳ **`LeaveAdjustmentRecordsSearchRequest`**

## Table of contents

### Constructors

- [constructor](LeaveAdjustmentRecordsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](LeaveAdjustmentRecordsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](LeaveAdjustmentRecordsSearchRequest.md#approvedonend)
- [approvedOnStart](LeaveAdjustmentRecordsSearchRequest.md#approvedonstart)
- [approverRoleId](LeaveAdjustmentRecordsSearchRequest.md#approverroleid)
- [count](LeaveAdjustmentRecordsSearchRequest.md#count)
- [entityUuid](LeaveAdjustmentRecordsSearchRequest.md#entityuuid)
- [isActive](LeaveAdjustmentRecordsSearchRequest.md#isactive)
- [leaveAdjustmentId](LeaveAdjustmentRecordsSearchRequest.md#leaveadjustmentid)
- [leaveTypeId](LeaveAdjustmentRecordsSearchRequest.md#leavetypeid)
- [offset](LeaveAdjustmentRecordsSearchRequest.md#offset)
- [searchKey](LeaveAdjustmentRecordsSearchRequest.md#searchkey)
- [sortKey](LeaveAdjustmentRecordsSearchRequest.md#sortkey)
- [sortOrder](LeaveAdjustmentRecordsSearchRequest.md#sortorder)
- [status](LeaveAdjustmentRecordsSearchRequest.md#status)
- [uomId](LeaveAdjustmentRecordsSearchRequest.md#uomid)
- [fields](LeaveAdjustmentRecordsSearchRequest.md#fields)
- [runtime](LeaveAdjustmentRecordsSearchRequest.md#runtime)
- [typeName](LeaveAdjustmentRecordsSearchRequest.md#typename)

### Methods

- [clone](LeaveAdjustmentRecordsSearchRequest.md#clone)
- [equals](LeaveAdjustmentRecordsSearchRequest.md#equals)
- [fromBinary](LeaveAdjustmentRecordsSearchRequest.md#frombinary)
- [fromJson](LeaveAdjustmentRecordsSearchRequest.md#fromjson)
- [fromJsonString](LeaveAdjustmentRecordsSearchRequest.md#fromjsonstring)
- [getType](LeaveAdjustmentRecordsSearchRequest.md#gettype)
- [toBinary](LeaveAdjustmentRecordsSearchRequest.md#tobinary)
- [toJSON](LeaveAdjustmentRecordsSearchRequest.md#tojson)
- [toJson](LeaveAdjustmentRecordsSearchRequest.md#tojson-1)
- [toJsonString](LeaveAdjustmentRecordsSearchRequest.md#tojsonstring)
- [equals](LeaveAdjustmentRecordsSearchRequest.md#equals-1)
- [fromBinary](LeaveAdjustmentRecordsSearchRequest.md#frombinary-1)
- [fromJson](LeaveAdjustmentRecordsSearchRequest.md#fromjson-1)
- [fromJsonString](LeaveAdjustmentRecordsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeaveAdjustmentRecordsSearchRequest**(`data?`): [`LeaveAdjustmentRecordsSearchRequest`](LeaveAdjustmentRecordsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeaveAdjustmentRecordsSearchRequest`](LeaveAdjustmentRecordsSearchRequest.md)\> |

#### Returns

[`LeaveAdjustmentRecordsSearchRequest`](LeaveAdjustmentRecordsSearchRequest.md)

#### Overrides

Message\&lt;LeaveAdjustmentRecordsSearchRequest\&gt;.constructor

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2168](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2168)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2131](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2131)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2124](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2124)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2117](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2117)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2138](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2138)

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

[src/leaves_adjustments.scailo_pb.ts:2049](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2049)

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

[src/leaves_adjustments.scailo_pb.ts:2103](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2103)

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

[src/leaves_adjustments.scailo_pb.ts:2033](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2033)

___

### leaveAdjustmentId

• **leaveAdjustmentId**: `bigint` = `protoInt64.zero`

The ID of the leave adjustment

**`Generated`**

from field: uint64 leave_adjustment_id = 20;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2145](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2145)

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

The ID of the leave type

**`Generated`**

from field: uint64 leave_type_id = 21;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2152](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2152)

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

[src/leaves_adjustments.scailo_pb.ts:2065](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2065)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2166](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2166)

___

### sortKey

• **sortKey**: [`LEAVE_ADJUSTMENT_RECORD_SORT_KEY`](../enums/LEAVE_ADJUSTMENT_RECORD_SORT_KEY.md) = `LEAVE_ADJUSTMENT_RECORD_SORT_KEY.LEAVE_ADJUSTMENT_RECORD_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.LEAVE_ADJUSTMENT_RECORD_SORT_KEY sort_key = 5;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2087](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2087)

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

[src/leaves_adjustments.scailo_pb.ts:2077](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2077)

___

### status

• **status**: [`LEAVE_ADJUSTMENT_RECORD_STATUS`](../enums/LEAVE_ADJUSTMENT_RECORD_STATUS.md) = `LEAVE_ADJUSTMENT_RECORD_STATUS.LEAVE_ADJUSTMENT_RECORD_STATUS_ANY_UNSPECIFIED`

The status of the records

**`Generated`**

from field: Scailo.LEAVE_ADJUSTMENT_RECORD_STATUS status = 7;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2110](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2110)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the UoM

**`Generated`**

from field: uint64 uom_id = 22;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2159](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2159)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2175](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2175)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2173](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2173)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeaveAdjustmentRecordsSearchRequest"``

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2174](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2174)

## Methods

### clone

▸ **clone**(): [`LeaveAdjustmentRecordsSearchRequest`](LeaveAdjustmentRecordsSearchRequest.md)

Create a deep copy.

#### Returns

[`LeaveAdjustmentRecordsSearchRequest`](LeaveAdjustmentRecordsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LeaveAdjustmentRecordsSearchRequest`](LeaveAdjustmentRecordsSearchRequest.md) \| `PlainMessage`\<[`LeaveAdjustmentRecordsSearchRequest`](LeaveAdjustmentRecordsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeaveAdjustmentRecordsSearchRequest`](LeaveAdjustmentRecordsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeaveAdjustmentRecordsSearchRequest`](LeaveAdjustmentRecordsSearchRequest.md)\>

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
| `a` | `undefined` \| [`LeaveAdjustmentRecordsSearchRequest`](LeaveAdjustmentRecordsSearchRequest.md) \| `PlainMessage`\<[`LeaveAdjustmentRecordsSearchRequest`](LeaveAdjustmentRecordsSearchRequest.md)\> |
| `b` | `undefined` \| [`LeaveAdjustmentRecordsSearchRequest`](LeaveAdjustmentRecordsSearchRequest.md) \| `PlainMessage`\<[`LeaveAdjustmentRecordsSearchRequest`](LeaveAdjustmentRecordsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2205](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2205)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeaveAdjustmentRecordsSearchRequest`](LeaveAdjustmentRecordsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeaveAdjustmentRecordsSearchRequest`](LeaveAdjustmentRecordsSearchRequest.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2193](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2193)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeaveAdjustmentRecordsSearchRequest`](LeaveAdjustmentRecordsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeaveAdjustmentRecordsSearchRequest`](LeaveAdjustmentRecordsSearchRequest.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2197](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2197)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeaveAdjustmentRecordsSearchRequest`](LeaveAdjustmentRecordsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeaveAdjustmentRecordsSearchRequest`](LeaveAdjustmentRecordsSearchRequest.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2201](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2201)
