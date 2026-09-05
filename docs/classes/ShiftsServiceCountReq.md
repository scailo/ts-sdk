[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ShiftsServiceCountReq

# Class: ShiftsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.ShiftsServiceCountReq

## Hierarchy

- `Message`\<[`ShiftsServiceCountReq`](ShiftsServiceCountReq.md)\>

  ↳ **`ShiftsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](ShiftsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](ShiftsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](ShiftsServiceCountReq.md#approvedonend)
- [approvedOnStart](ShiftsServiceCountReq.md#approvedonstart)
- [approverRoleId](ShiftsServiceCountReq.md#approverroleid)
- [code](ShiftsServiceCountReq.md#code)
- [completedOnEnd](ShiftsServiceCountReq.md#completedonend)
- [completedOnStart](ShiftsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](ShiftsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](ShiftsServiceCountReq.md#creationtimestampstart)
- [entityUuid](ShiftsServiceCountReq.md#entityuuid)
- [isActive](ShiftsServiceCountReq.md#isactive)
- [modificationTimestampEnd](ShiftsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](ShiftsServiceCountReq.md#modificationtimestampstart)
- [name](ShiftsServiceCountReq.md#name)
- [status](ShiftsServiceCountReq.md#status)
- [fields](ShiftsServiceCountReq.md#fields)
- [runtime](ShiftsServiceCountReq.md#runtime)
- [typeName](ShiftsServiceCountReq.md#typename)

### Methods

- [clone](ShiftsServiceCountReq.md#clone)
- [equals](ShiftsServiceCountReq.md#equals)
- [fromBinary](ShiftsServiceCountReq.md#frombinary)
- [fromJson](ShiftsServiceCountReq.md#fromjson)
- [fromJsonString](ShiftsServiceCountReq.md#fromjsonstring)
- [getType](ShiftsServiceCountReq.md#gettype)
- [toBinary](ShiftsServiceCountReq.md#tobinary)
- [toJSON](ShiftsServiceCountReq.md#tojson)
- [toJson](ShiftsServiceCountReq.md#tojson-1)
- [toJsonString](ShiftsServiceCountReq.md#tojsonstring)
- [equals](ShiftsServiceCountReq.md#equals-1)
- [fromBinary](ShiftsServiceCountReq.md#frombinary-1)
- [fromJson](ShiftsServiceCountReq.md#fromjson-1)
- [fromJsonString](ShiftsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsServiceCountReq**(`data?`): [`ShiftsServiceCountReq`](ShiftsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ShiftsServiceCountReq`](ShiftsServiceCountReq.md)\> |

#### Returns

[`ShiftsServiceCountReq`](ShiftsServiceCountReq.md)

#### Overrides

Message\&lt;ShiftsServiceCountReq\&gt;.constructor

#### Defined in

[src/shifts.scailo_pb.ts:1336](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1336)

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

[src/shifts.scailo_pb.ts:1272](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1272)

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

[src/shifts.scailo_pb.ts:1256](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1256)

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

[src/shifts.scailo_pb.ts:1240](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1240)

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

[src/shifts.scailo_pb.ts:1288](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1288)

___

### code

• **code**: `string` = `""`

The shift code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/shifts.scailo_pb.ts:1334](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1334)

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

[src/shifts.scailo_pb.ts:1320](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1320)

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

[src/shifts.scailo_pb.ts:1304](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1304)

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

[src/shifts.scailo_pb.ts:1164](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1164)

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

[src/shifts.scailo_pb.ts:1148](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1148)

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

[src/shifts.scailo_pb.ts:1212](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1212)

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

[src/shifts.scailo_pb.ts:1132](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1132)

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

[src/shifts.scailo_pb.ts:1196](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1196)

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

[src/shifts.scailo_pb.ts:1180](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1180)

___

### name

• **name**: `string` = `""`

The name of the shift

**`Generated`**

from field: string name = 20;

#### Defined in

[src/shifts.scailo_pb.ts:1327](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1327)

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

[src/shifts.scailo_pb.ts:1224](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1224)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts.scailo_pb.ts:1343](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1343)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts.scailo_pb.ts:1341](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1341)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ShiftsServiceCountReq"``

#### Defined in

[src/shifts.scailo_pb.ts:1342](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1342)

## Methods

### clone

▸ **clone**(): [`ShiftsServiceCountReq`](ShiftsServiceCountReq.md)

Create a deep copy.

#### Returns

[`ShiftsServiceCountReq`](ShiftsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsServiceCountReq`](ShiftsServiceCountReq.md) \| `PlainMessage`\<[`ShiftsServiceCountReq`](ShiftsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ShiftsServiceCountReq`](ShiftsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ShiftsServiceCountReq`](ShiftsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`ShiftsServiceCountReq`](ShiftsServiceCountReq.md) \| `PlainMessage`\<[`ShiftsServiceCountReq`](ShiftsServiceCountReq.md)\> |
| `b` | `undefined` \| [`ShiftsServiceCountReq`](ShiftsServiceCountReq.md) \| `PlainMessage`\<[`ShiftsServiceCountReq`](ShiftsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts.scailo_pb.ts:1373](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1373)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsServiceCountReq`](ShiftsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ShiftsServiceCountReq`](ShiftsServiceCountReq.md)

#### Defined in

[src/shifts.scailo_pb.ts:1361](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1361)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsServiceCountReq`](ShiftsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceCountReq`](ShiftsServiceCountReq.md)

#### Defined in

[src/shifts.scailo_pb.ts:1365](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1365)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsServiceCountReq`](ShiftsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceCountReq`](ShiftsServiceCountReq.md)

#### Defined in

[src/shifts.scailo_pb.ts:1369](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L1369)
