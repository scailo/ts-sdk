[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StoresServiceFilterReq

# Class: StoresServiceFilterReq

Advanced filter request for searching and paginating stores using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.StoresServiceFilterReq

## Hierarchy

- `Message`\<[`StoresServiceFilterReq`](StoresServiceFilterReq.md)\>

  ↳ **`StoresServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](StoresServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](StoresServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](StoresServiceFilterReq.md#approvedonend)
- [approvedOnStart](StoresServiceFilterReq.md#approvedonstart)
- [approverRoleId](StoresServiceFilterReq.md#approverroleid)
- [code](StoresServiceFilterReq.md#code)
- [count](StoresServiceFilterReq.md#count)
- [creationTimestampEnd](StoresServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](StoresServiceFilterReq.md#creationtimestampstart)
- [entityUuid](StoresServiceFilterReq.md#entityuuid)
- [isActive](StoresServiceFilterReq.md#isactive)
- [locationId](StoresServiceFilterReq.md#locationid)
- [modificationTimestampEnd](StoresServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](StoresServiceFilterReq.md#modificationtimestampstart)
- [name](StoresServiceFilterReq.md#name)
- [offset](StoresServiceFilterReq.md#offset)
- [sortKey](StoresServiceFilterReq.md#sortkey)
- [sortOrder](StoresServiceFilterReq.md#sortorder)
- [status](StoresServiceFilterReq.md#status)
- [fields](StoresServiceFilterReq.md#fields)
- [runtime](StoresServiceFilterReq.md#runtime)
- [typeName](StoresServiceFilterReq.md#typename)

### Methods

- [clone](StoresServiceFilterReq.md#clone)
- [equals](StoresServiceFilterReq.md#equals)
- [fromBinary](StoresServiceFilterReq.md#frombinary)
- [fromJson](StoresServiceFilterReq.md#fromjson)
- [fromJsonString](StoresServiceFilterReq.md#fromjsonstring)
- [getType](StoresServiceFilterReq.md#gettype)
- [toBinary](StoresServiceFilterReq.md#tobinary)
- [toJSON](StoresServiceFilterReq.md#tojson)
- [toJson](StoresServiceFilterReq.md#tojson-1)
- [toJsonString](StoresServiceFilterReq.md#tojsonstring)
- [equals](StoresServiceFilterReq.md#equals-1)
- [fromBinary](StoresServiceFilterReq.md#frombinary-1)
- [fromJson](StoresServiceFilterReq.md#fromjson-1)
- [fromJsonString](StoresServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StoresServiceFilterReq**(`data?`): [`StoresServiceFilterReq`](StoresServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StoresServiceFilterReq`](StoresServiceFilterReq.md)\> |

#### Returns

[`StoresServiceFilterReq`](StoresServiceFilterReq.md)

#### Overrides

Message\&lt;StoresServiceFilterReq\&gt;.constructor

#### Defined in

[src/stores.scailo_pb.ts:1097](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L1097)

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

[src/stores.scailo_pb.ts:1031](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L1031)

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

[src/stores.scailo_pb.ts:1015](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L1015)

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

[src/stores.scailo_pb.ts:999](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L999)

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

[src/stores.scailo_pb.ts:1047](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L1047)

___

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique code or internal alphanumeric token used to classify the store facility for accounting, delivery, or inventory mapping.

**`Example`**

```ts
"STR-DT-01"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 21;

#### Defined in

[src/stores.scailo_pb.ts:1079](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L1079)

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

[src/stores.scailo_pb.ts:853](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L853)

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

[src/stores.scailo_pb.ts:923](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L923)

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

[src/stores.scailo_pb.ts:907](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L907)

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

[src/stores.scailo_pb.ts:971](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L971)

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

[src/stores.scailo_pb.ts:837](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L837)

___

### locationId

• `Optional` **locationId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the geographic or logical location under which this store is situated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer greater than zero.

**`Generated`**

from field: optional uint64 location_id = 22;

#### Defined in

[src/stores.scailo_pb.ts:1095](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L1095)

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

[src/stores.scailo_pb.ts:955](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L955)

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

[src/stores.scailo_pb.ts:939](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L939)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official, friendly, or legal branding name of the store facility.

**`Example`**

```ts
"Downtown Flagship Store"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 20;

#### Defined in

[src/stores.scailo_pb.ts:1063](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L1063)

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

[src/stores.scailo_pb.ts:869](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L869)

___

### sortKey

• `Optional` **sortKey**: [`STORE_SORT_KEY`](../enums/STORE_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.STORE_SORT_KEY sort_key = 5;

#### Defined in

[src/stores.scailo_pb.ts:891](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L891)

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

[src/stores.scailo_pb.ts:881](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L881)

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

[src/stores.scailo_pb.ts:983](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L983)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stores.scailo_pb.ts:1104](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L1104)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stores.scailo_pb.ts:1102](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L1102)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoresServiceFilterReq"``

#### Defined in

[src/stores.scailo_pb.ts:1103](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L1103)

## Methods

### clone

▸ **clone**(): [`StoresServiceFilterReq`](StoresServiceFilterReq.md)

Create a deep copy.

#### Returns

[`StoresServiceFilterReq`](StoresServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StoresServiceFilterReq`](StoresServiceFilterReq.md) \| `PlainMessage`\<[`StoresServiceFilterReq`](StoresServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`StoresServiceFilterReq`](StoresServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StoresServiceFilterReq`](StoresServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`StoresServiceFilterReq`](StoresServiceFilterReq.md) \| `PlainMessage`\<[`StoresServiceFilterReq`](StoresServiceFilterReq.md)\> |
| `b` | `undefined` \| [`StoresServiceFilterReq`](StoresServiceFilterReq.md) \| `PlainMessage`\<[`StoresServiceFilterReq`](StoresServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stores.scailo_pb.ts:1137](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L1137)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StoresServiceFilterReq`](StoresServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StoresServiceFilterReq`](StoresServiceFilterReq.md)

#### Defined in

[src/stores.scailo_pb.ts:1125](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L1125)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StoresServiceFilterReq`](StoresServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresServiceFilterReq`](StoresServiceFilterReq.md)

#### Defined in

[src/stores.scailo_pb.ts:1129](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L1129)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StoresServiceFilterReq`](StoresServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresServiceFilterReq`](StoresServiceFilterReq.md)

#### Defined in

[src/stores.scailo_pb.ts:1133](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L1133)
