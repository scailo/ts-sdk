[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ShiftsServiceFilterReq

# Class: ShiftsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.ShiftsServiceFilterReq

## Hierarchy

- `Message`\<[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)\>

  ↳ **`ShiftsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ShiftsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ShiftsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ShiftsServiceFilterReq.md#approvedonend)
- [approvedOnStart](ShiftsServiceFilterReq.md#approvedonstart)
- [approverRoleId](ShiftsServiceFilterReq.md#approverroleid)
- [code](ShiftsServiceFilterReq.md#code)
- [completedOnEnd](ShiftsServiceFilterReq.md#completedonend)
- [completedOnStart](ShiftsServiceFilterReq.md#completedonstart)
- [count](ShiftsServiceFilterReq.md#count)
- [creationTimestampEnd](ShiftsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ShiftsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](ShiftsServiceFilterReq.md#entityuuid)
- [isActive](ShiftsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](ShiftsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ShiftsServiceFilterReq.md#modificationtimestampstart)
- [name](ShiftsServiceFilterReq.md#name)
- [offset](ShiftsServiceFilterReq.md#offset)
- [sortKey](ShiftsServiceFilterReq.md#sortkey)
- [sortOrder](ShiftsServiceFilterReq.md#sortorder)
- [status](ShiftsServiceFilterReq.md#status)
- [fields](ShiftsServiceFilterReq.md#fields)
- [runtime](ShiftsServiceFilterReq.md#runtime)
- [typeName](ShiftsServiceFilterReq.md#typename)

### Methods

- [clone](ShiftsServiceFilterReq.md#clone)
- [equals](ShiftsServiceFilterReq.md#equals)
- [fromBinary](ShiftsServiceFilterReq.md#frombinary)
- [fromJson](ShiftsServiceFilterReq.md#fromjson)
- [fromJsonString](ShiftsServiceFilterReq.md#fromjsonstring)
- [getType](ShiftsServiceFilterReq.md#gettype)
- [toBinary](ShiftsServiceFilterReq.md#tobinary)
- [toJSON](ShiftsServiceFilterReq.md#tojson)
- [toJson](ShiftsServiceFilterReq.md#tojson-1)
- [toJsonString](ShiftsServiceFilterReq.md#tojsonstring)
- [equals](ShiftsServiceFilterReq.md#equals-1)
- [fromBinary](ShiftsServiceFilterReq.md#frombinary-1)
- [fromJson](ShiftsServiceFilterReq.md#fromjson-1)
- [fromJsonString](ShiftsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsServiceFilterReq**(`data?`): [`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)\> |

#### Returns

[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

#### Overrides

Message\&lt;ShiftsServiceFilterReq\&gt;.constructor

#### Defined in

[src/shifts.scailo_pb.ts:1069](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L1069)

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

[src/shifts.scailo_pb.ts:1005](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L1005)

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

[src/shifts.scailo_pb.ts:989](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L989)

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

[src/shifts.scailo_pb.ts:973](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L973)

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

[src/shifts.scailo_pb.ts:1021](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L1021)

___

### code

• **code**: `string` = `""`

The shift code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/shifts.scailo_pb.ts:1067](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L1067)

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

[src/shifts.scailo_pb.ts:1053](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L1053)

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

[src/shifts.scailo_pb.ts:1037](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L1037)

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

[src/shifts.scailo_pb.ts:827](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L827)

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

[src/shifts.scailo_pb.ts:897](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L897)

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

[src/shifts.scailo_pb.ts:881](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L881)

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

[src/shifts.scailo_pb.ts:945](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L945)

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

[src/shifts.scailo_pb.ts:811](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L811)

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

[src/shifts.scailo_pb.ts:929](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L929)

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

[src/shifts.scailo_pb.ts:913](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L913)

___

### name

• **name**: `string` = `""`

The name of the shift

**`Generated`**

from field: string name = 20;

#### Defined in

[src/shifts.scailo_pb.ts:1060](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L1060)

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

[src/shifts.scailo_pb.ts:843](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L843)

___

### sortKey

• **sortKey**: [`SHIFT_SORT_KEY`](../enums/SHIFT_SORT_KEY.md) = `SHIFT_SORT_KEY.SHIFT_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.SHIFT_SORT_KEY sort_key = 5;

#### Defined in

[src/shifts.scailo_pb.ts:865](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L865)

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

[src/shifts.scailo_pb.ts:855](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L855)

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

[src/shifts.scailo_pb.ts:957](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L957)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts.scailo_pb.ts:1076](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L1076)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts.scailo_pb.ts:1074](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L1074)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ShiftsServiceFilterReq"``

#### Defined in

[src/shifts.scailo_pb.ts:1075](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L1075)

## Methods

### clone

▸ **clone**(): [`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md) \| `PlainMessage`\<[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md) \| `PlainMessage`\<[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md) \| `PlainMessage`\<[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts.scailo_pb.ts:1110](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L1110)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

#### Defined in

[src/shifts.scailo_pb.ts:1098](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L1098)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

#### Defined in

[src/shifts.scailo_pb.ts:1102](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L1102)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

#### Defined in

[src/shifts.scailo_pb.ts:1106](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts.scailo_pb.ts#L1106)
