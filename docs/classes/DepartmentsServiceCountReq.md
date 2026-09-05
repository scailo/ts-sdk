[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DepartmentsServiceCountReq

# Class: DepartmentsServiceCountReq

Target filter request for counting department records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

**`Generated`**

from message Scailo.DepartmentsServiceCountReq

## Hierarchy

- `Message`\<[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)\>

  ↳ **`DepartmentsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](DepartmentsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](DepartmentsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](DepartmentsServiceCountReq.md#approvedonend)
- [approvedOnStart](DepartmentsServiceCountReq.md#approvedonstart)
- [approverRoleId](DepartmentsServiceCountReq.md#approverroleid)
- [code](DepartmentsServiceCountReq.md#code)
- [completedOnEnd](DepartmentsServiceCountReq.md#completedonend)
- [completedOnStart](DepartmentsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](DepartmentsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](DepartmentsServiceCountReq.md#creationtimestampstart)
- [entityUuid](DepartmentsServiceCountReq.md#entityuuid)
- [headUserId](DepartmentsServiceCountReq.md#headuserid)
- [isActive](DepartmentsServiceCountReq.md#isactive)
- [modificationTimestampEnd](DepartmentsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](DepartmentsServiceCountReq.md#modificationtimestampstart)
- [name](DepartmentsServiceCountReq.md#name)
- [status](DepartmentsServiceCountReq.md#status)
- [fields](DepartmentsServiceCountReq.md#fields)
- [runtime](DepartmentsServiceCountReq.md#runtime)
- [typeName](DepartmentsServiceCountReq.md#typename)

### Methods

- [clone](DepartmentsServiceCountReq.md#clone)
- [equals](DepartmentsServiceCountReq.md#equals)
- [fromBinary](DepartmentsServiceCountReq.md#frombinary)
- [fromJson](DepartmentsServiceCountReq.md#fromjson)
- [fromJsonString](DepartmentsServiceCountReq.md#fromjsonstring)
- [getType](DepartmentsServiceCountReq.md#gettype)
- [toBinary](DepartmentsServiceCountReq.md#tobinary)
- [toJSON](DepartmentsServiceCountReq.md#tojson)
- [toJson](DepartmentsServiceCountReq.md#tojson-1)
- [toJsonString](DepartmentsServiceCountReq.md#tojsonstring)
- [equals](DepartmentsServiceCountReq.md#equals-1)
- [fromBinary](DepartmentsServiceCountReq.md#frombinary-1)
- [fromJson](DepartmentsServiceCountReq.md#fromjson-1)
- [fromJsonString](DepartmentsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new DepartmentsServiceCountReq**(`data?`): [`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)\> |

#### Returns

[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)

#### Overrides

Message\&lt;DepartmentsServiceCountReq\&gt;.constructor

#### Defined in

[src/departments.scailo_pb.ts:1436](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1436)

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

[src/departments.scailo_pb.ts:1338](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1338)

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

[src/departments.scailo_pb.ts:1322](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1322)

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

[src/departments.scailo_pb.ts:1306](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1306)

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

[src/departments.scailo_pb.ts:1354](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1354)

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

[src/departments.scailo_pb.ts:1418](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1418)

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

[src/departments.scailo_pb.ts:1386](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1386)

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

[src/departments.scailo_pb.ts:1370](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1370)

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

[src/departments.scailo_pb.ts:1230](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1230)

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

[src/departments.scailo_pb.ts:1214](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1214)

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

[src/departments.scailo_pb.ts:1278](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1278)

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

[src/departments.scailo_pb.ts:1434](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1434)

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

[src/departments.scailo_pb.ts:1198](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1198)

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

[src/departments.scailo_pb.ts:1262](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1262)

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

[src/departments.scailo_pb.ts:1246](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1246)

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

[src/departments.scailo_pb.ts:1402](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1402)

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

[src/departments.scailo_pb.ts:1290](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1290)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/departments.scailo_pb.ts:1443](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1443)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/departments.scailo_pb.ts:1441](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1441)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DepartmentsServiceCountReq"``

#### Defined in

[src/departments.scailo_pb.ts:1442](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1442)

## Methods

### clone

▸ **clone**(): [`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)

Create a deep copy.

#### Returns

[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md) \| `PlainMessage`\<[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md) \| `PlainMessage`\<[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)\> |
| `b` | `undefined` \| [`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md) \| `PlainMessage`\<[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/departments.scailo_pb.ts:1474](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1474)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)

#### Defined in

[src/departments.scailo_pb.ts:1462](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1462)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)

#### Defined in

[src/departments.scailo_pb.ts:1466](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1466)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)

#### Defined in

[src/departments.scailo_pb.ts:1470](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L1470)
