[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TeamsServicePaginationReq

# Class: TeamsServicePaginationReq

Pagination request for retrieving slices of Team records.

**`Generated`**

from message Scailo.TeamsServicePaginationReq

## Hierarchy

- `Message`\<[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)\>

  ↳ **`TeamsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](TeamsServicePaginationReq.md#constructor)

### Properties

- [count](TeamsServicePaginationReq.md#count)
- [isActive](TeamsServicePaginationReq.md#isactive)
- [offset](TeamsServicePaginationReq.md#offset)
- [sortKey](TeamsServicePaginationReq.md#sortkey)
- [sortOrder](TeamsServicePaginationReq.md#sortorder)
- [status](TeamsServicePaginationReq.md#status)
- [fields](TeamsServicePaginationReq.md#fields)
- [runtime](TeamsServicePaginationReq.md#runtime)
- [typeName](TeamsServicePaginationReq.md#typename)

### Methods

- [clone](TeamsServicePaginationReq.md#clone)
- [equals](TeamsServicePaginationReq.md#equals)
- [fromBinary](TeamsServicePaginationReq.md#frombinary)
- [fromJson](TeamsServicePaginationReq.md#fromjson)
- [fromJsonString](TeamsServicePaginationReq.md#fromjsonstring)
- [getType](TeamsServicePaginationReq.md#gettype)
- [toBinary](TeamsServicePaginationReq.md#tobinary)
- [toJSON](TeamsServicePaginationReq.md#tojson)
- [toJson](TeamsServicePaginationReq.md#tojson-1)
- [toJsonString](TeamsServicePaginationReq.md#tojsonstring)
- [equals](TeamsServicePaginationReq.md#equals-1)
- [fromBinary](TeamsServicePaginationReq.md#frombinary-1)
- [fromJson](TeamsServicePaginationReq.md#fromjson-1)
- [fromJsonString](TeamsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamsServicePaginationReq**(`data?`): [`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)\> |

#### Returns

[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)

#### Overrides

Message\&lt;TeamsServicePaginationReq\&gt;.constructor

#### Defined in

[src/teams.scailo_pb.ts:1202](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1202)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to return per page.

**`Example`**

```ts
50
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/teams.scailo_pb.ts:1150](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1150)

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

[src/teams.scailo_pb.ts:1134](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1134)

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

[src/teams.scailo_pb.ts:1166](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1166)

___

### sortKey

• `Optional` **sortKey**: [`TEAM_SORT_KEY`](../enums/TEAM_SORT_KEY.md)

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: optional Scailo.TEAM_SORT_KEY sort_key = 5;

#### Defined in

[src/teams.scailo_pb.ts:1188](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1188)

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

[src/teams.scailo_pb.ts:1178](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1178)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter results by a specific lifecycle status.

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/teams.scailo_pb.ts:1200](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1200)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams.scailo_pb.ts:1209](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1209)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams.scailo_pb.ts:1207](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1207)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TeamsServicePaginationReq"``

#### Defined in

[src/teams.scailo_pb.ts:1208](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1208)

## Methods

### clone

▸ **clone**(): [`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamsServicePaginationReq`](TeamsServicePaginationReq.md) \| `PlainMessage`\<[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`TeamsServicePaginationReq`](TeamsServicePaginationReq.md) \| `PlainMessage`\<[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`TeamsServicePaginationReq`](TeamsServicePaginationReq.md) \| `PlainMessage`\<[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams.scailo_pb.ts:1230](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1230)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)

#### Defined in

[src/teams.scailo_pb.ts:1218](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1218)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)

#### Defined in

[src/teams.scailo_pb.ts:1222](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1222)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)

#### Defined in

[src/teams.scailo_pb.ts:1226](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1226)
