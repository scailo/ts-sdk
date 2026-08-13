[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DepartmentsServiceFilterReq

# Class: DepartmentsServiceFilterReq

Advanced filter request for searching and paginating departments using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.DepartmentsServiceFilterReq

## Hierarchy

- `Message`\<[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)\>

  ↳ **`DepartmentsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](DepartmentsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](DepartmentsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](DepartmentsServiceFilterReq.md#approvedonend)
- [approvedOnStart](DepartmentsServiceFilterReq.md#approvedonstart)
- [approverRoleId](DepartmentsServiceFilterReq.md#approverroleid)
- [code](DepartmentsServiceFilterReq.md#code)
- [completedOnEnd](DepartmentsServiceFilterReq.md#completedonend)
- [completedOnStart](DepartmentsServiceFilterReq.md#completedonstart)
- [count](DepartmentsServiceFilterReq.md#count)
- [creationTimestampEnd](DepartmentsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](DepartmentsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](DepartmentsServiceFilterReq.md#entityuuid)
- [headUserId](DepartmentsServiceFilterReq.md#headuserid)
- [isActive](DepartmentsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](DepartmentsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](DepartmentsServiceFilterReq.md#modificationtimestampstart)
- [name](DepartmentsServiceFilterReq.md#name)
- [offset](DepartmentsServiceFilterReq.md#offset)
- [sortKey](DepartmentsServiceFilterReq.md#sortkey)
- [sortOrder](DepartmentsServiceFilterReq.md#sortorder)
- [status](DepartmentsServiceFilterReq.md#status)
- [fields](DepartmentsServiceFilterReq.md#fields)
- [runtime](DepartmentsServiceFilterReq.md#runtime)
- [typeName](DepartmentsServiceFilterReq.md#typename)

### Methods

- [clone](DepartmentsServiceFilterReq.md#clone)
- [equals](DepartmentsServiceFilterReq.md#equals)
- [fromBinary](DepartmentsServiceFilterReq.md#frombinary)
- [fromJson](DepartmentsServiceFilterReq.md#fromjson)
- [fromJsonString](DepartmentsServiceFilterReq.md#fromjsonstring)
- [getType](DepartmentsServiceFilterReq.md#gettype)
- [toBinary](DepartmentsServiceFilterReq.md#tobinary)
- [toJSON](DepartmentsServiceFilterReq.md#tojson)
- [toJson](DepartmentsServiceFilterReq.md#tojson-1)
- [toJsonString](DepartmentsServiceFilterReq.md#tojsonstring)
- [equals](DepartmentsServiceFilterReq.md#equals-1)
- [fromBinary](DepartmentsServiceFilterReq.md#frombinary-1)
- [fromJson](DepartmentsServiceFilterReq.md#fromjson-1)
- [fromJsonString](DepartmentsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new DepartmentsServiceFilterReq**(`data?`): [`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)\> |

#### Returns

[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)

#### Overrides

Message\&lt;DepartmentsServiceFilterReq\&gt;.constructor

#### Defined in

[src/departments.scailo_pb.ts:1128](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L1128)

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

[src/departments.scailo_pb.ts:1030](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L1030)

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

[src/departments.scailo_pb.ts:1014](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L1014)

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

[src/departments.scailo_pb.ts:998](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L998)

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

[src/departments.scailo_pb.ts:1046](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L1046)

___

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique code or internal alphanumeric token used to classify the department for billing or budgeting.

**`Example`**

```ts
"DEPT-ENG-04"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 21;

#### Defined in

[src/departments.scailo_pb.ts:1110](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L1110)

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

[src/departments.scailo_pb.ts:1078](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L1078)

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

[src/departments.scailo_pb.ts:1062](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L1062)

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

[src/departments.scailo_pb.ts:852](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L852)

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

[src/departments.scailo_pb.ts:922](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L922)

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

[src/departments.scailo_pb.ts:906](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L906)

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

[src/departments.scailo_pb.ts:970](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L970)

___

### headUserId

• `Optional` **headUserId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the user assigned as the department head.

**`Example`**

```ts
8842
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer greater than zero.

**`Generated`**

from field: optional uint64 head_user_id = 22;

#### Defined in

[src/departments.scailo_pb.ts:1126](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L1126)

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

[src/departments.scailo_pb.ts:836](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L836)

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

[src/departments.scailo_pb.ts:954](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L954)

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

[src/departments.scailo_pb.ts:938](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L938)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or friendly name of the department.

**`Example`**

```ts
"Engineering and Architecture"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 20;

#### Defined in

[src/departments.scailo_pb.ts:1094](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L1094)

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

[src/departments.scailo_pb.ts:868](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L868)

___

### sortKey

• `Optional` **sortKey**: [`DEPARTMENT_SORT_KEY`](../enums/DEPARTMENT_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.DEPARTMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/departments.scailo_pb.ts:890](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L890)

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

[src/departments.scailo_pb.ts:880](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L880)

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

[src/departments.scailo_pb.ts:982](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L982)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/departments.scailo_pb.ts:1135](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L1135)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/departments.scailo_pb.ts:1133](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L1133)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DepartmentsServiceFilterReq"``

#### Defined in

[src/departments.scailo_pb.ts:1134](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L1134)

## Methods

### clone

▸ **clone**(): [`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md) \| `PlainMessage`\<[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md) \| `PlainMessage`\<[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md) \| `PlainMessage`\<[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/departments.scailo_pb.ts:1170](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L1170)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)

#### Defined in

[src/departments.scailo_pb.ts:1158](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L1158)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)

#### Defined in

[src/departments.scailo_pb.ts:1162](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L1162)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)

#### Defined in

[src/departments.scailo_pb.ts:1166](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L1166)
