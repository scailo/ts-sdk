[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CurrenciesServiceCountReq

# Class: CurrenciesServiceCountReq

Target filter request for counting currency records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

**`Generated`**

from message Scailo.CurrenciesServiceCountReq

## Hierarchy

- `Message`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\>

  ↳ **`CurrenciesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](CurrenciesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](CurrenciesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](CurrenciesServiceCountReq.md#approvedonend)
- [approvedOnStart](CurrenciesServiceCountReq.md#approvedonstart)
- [approverRoleId](CurrenciesServiceCountReq.md#approverroleid)
- [creationTimestampEnd](CurrenciesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](CurrenciesServiceCountReq.md#creationtimestampstart)
- [entityUuid](CurrenciesServiceCountReq.md#entityuuid)
- [isActive](CurrenciesServiceCountReq.md#isactive)
- [modificationTimestampEnd](CurrenciesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](CurrenciesServiceCountReq.md#modificationtimestampstart)
- [name](CurrenciesServiceCountReq.md#name)
- [status](CurrenciesServiceCountReq.md#status)
- [symbol](CurrenciesServiceCountReq.md#symbol)
- [fields](CurrenciesServiceCountReq.md#fields)
- [runtime](CurrenciesServiceCountReq.md#runtime)
- [typeName](CurrenciesServiceCountReq.md#typename)

### Methods

- [clone](CurrenciesServiceCountReq.md#clone)
- [equals](CurrenciesServiceCountReq.md#equals)
- [fromBinary](CurrenciesServiceCountReq.md#frombinary)
- [fromJson](CurrenciesServiceCountReq.md#fromjson)
- [fromJsonString](CurrenciesServiceCountReq.md#fromjsonstring)
- [getType](CurrenciesServiceCountReq.md#gettype)
- [toBinary](CurrenciesServiceCountReq.md#tobinary)
- [toJSON](CurrenciesServiceCountReq.md#tojson)
- [toJson](CurrenciesServiceCountReq.md#tojson-1)
- [toJsonString](CurrenciesServiceCountReq.md#tojsonstring)
- [equals](CurrenciesServiceCountReq.md#equals-1)
- [fromBinary](CurrenciesServiceCountReq.md#frombinary-1)
- [fromJson](CurrenciesServiceCountReq.md#fromjson-1)
- [fromJsonString](CurrenciesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new CurrenciesServiceCountReq**(`data?`): [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\> |

#### Returns

[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Overrides

Message\&lt;CurrenciesServiceCountReq\&gt;.constructor

#### Defined in

[src/currencies.scailo_pb.ts:1310](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1310)

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

[src/currencies.scailo_pb.ts:1260](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1260)

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

[src/currencies.scailo_pb.ts:1244](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1244)

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

[src/currencies.scailo_pb.ts:1228](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1228)

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

[src/currencies.scailo_pb.ts:1276](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1276)

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

[src/currencies.scailo_pb.ts:1152](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1152)

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

[src/currencies.scailo_pb.ts:1136](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1136)

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

[src/currencies.scailo_pb.ts:1200](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1200)

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

[src/currencies.scailo_pb.ts:1120](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1120)

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

[src/currencies.scailo_pb.ts:1184](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1184)

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

[src/currencies.scailo_pb.ts:1168](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1168)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or canonical name of the currency.

**`Example`**

```ts
"US Dollar"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 20;

#### Defined in

[src/currencies.scailo_pb.ts:1292](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1292)

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

[src/currencies.scailo_pb.ts:1212](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1212)

___

### symbol

• `Optional` **symbol**: `string`

**`Optional`**

**`Description`**

The unique symbol, shorthand token, or ISO code by which the currency is structurally classified.

**`Example`**

```ts
"USD"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string symbol = 21;

#### Defined in

[src/currencies.scailo_pb.ts:1308](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1308)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/currencies.scailo_pb.ts:1317](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1317)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/currencies.scailo_pb.ts:1315](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1315)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CurrenciesServiceCountReq"``

#### Defined in

[src/currencies.scailo_pb.ts:1316](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1316)

## Methods

### clone

▸ **clone**(): [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

Create a deep copy.

#### Returns

[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md) \| `PlainMessage`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md) \| `PlainMessage`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\> |
| `b` | `undefined` \| [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md) \| `PlainMessage`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/currencies.scailo_pb.ts:1345](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1345)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:1333](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1333)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:1337](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1337)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:1341](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/currencies.scailo_pb.ts#L1341)
