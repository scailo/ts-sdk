[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / RolesServicePaginationReq

# Class: RolesServicePaginationReq

Pagination request for retrieving slices of Role records.

**`Generated`**

from message Scailo.RolesServicePaginationReq

## Hierarchy

- `Message`\<[`RolesServicePaginationReq`](RolesServicePaginationReq.md)\>

  ↳ **`RolesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](RolesServicePaginationReq.md#constructor)

### Properties

- [count](RolesServicePaginationReq.md#count)
- [isActive](RolesServicePaginationReq.md#isactive)
- [offset](RolesServicePaginationReq.md#offset)
- [sortKey](RolesServicePaginationReq.md#sortkey)
- [sortOrder](RolesServicePaginationReq.md#sortorder)
- [status](RolesServicePaginationReq.md#status)
- [fields](RolesServicePaginationReq.md#fields)
- [runtime](RolesServicePaginationReq.md#runtime)
- [typeName](RolesServicePaginationReq.md#typename)

### Methods

- [clone](RolesServicePaginationReq.md#clone)
- [equals](RolesServicePaginationReq.md#equals)
- [fromBinary](RolesServicePaginationReq.md#frombinary)
- [fromJson](RolesServicePaginationReq.md#fromjson)
- [fromJsonString](RolesServicePaginationReq.md#fromjsonstring)
- [getType](RolesServicePaginationReq.md#gettype)
- [toBinary](RolesServicePaginationReq.md#tobinary)
- [toJSON](RolesServicePaginationReq.md#tojson)
- [toJson](RolesServicePaginationReq.md#tojson-1)
- [toJsonString](RolesServicePaginationReq.md#tojsonstring)
- [equals](RolesServicePaginationReq.md#equals-1)
- [fromBinary](RolesServicePaginationReq.md#frombinary-1)
- [fromJson](RolesServicePaginationReq.md#fromjson-1)
- [fromJsonString](RolesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new RolesServicePaginationReq**(`data?`): [`RolesServicePaginationReq`](RolesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`RolesServicePaginationReq`](RolesServicePaginationReq.md)\> |

#### Returns

[`RolesServicePaginationReq`](RolesServicePaginationReq.md)

#### Overrides

Message\&lt;RolesServicePaginationReq\&gt;.constructor

#### Defined in

[src/roles.scailo_pb.ts:1056](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1056)

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

[src/roles.scailo_pb.ts:1004](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1004)

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

[src/roles.scailo_pb.ts:988](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L988)

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

[src/roles.scailo_pb.ts:1020](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1020)

___

### sortKey

• `Optional` **sortKey**: [`ROLE_SORT_KEY`](../enums/ROLE_SORT_KEY.md)

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: optional Scailo.ROLE_SORT_KEY sort_key = 5;

#### Defined in

[src/roles.scailo_pb.ts:1042](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1042)

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

[src/roles.scailo_pb.ts:1032](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1032)

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

[src/roles.scailo_pb.ts:1054](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1054)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/roles.scailo_pb.ts:1063](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1063)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/roles.scailo_pb.ts:1061](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1061)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.RolesServicePaginationReq"``

#### Defined in

[src/roles.scailo_pb.ts:1062](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1062)

## Methods

### clone

▸ **clone**(): [`RolesServicePaginationReq`](RolesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`RolesServicePaginationReq`](RolesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`RolesServicePaginationReq`](RolesServicePaginationReq.md) \| `PlainMessage`\<[`RolesServicePaginationReq`](RolesServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`RolesServicePaginationReq`](RolesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`RolesServicePaginationReq`](RolesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`RolesServicePaginationReq`](RolesServicePaginationReq.md) \| `PlainMessage`\<[`RolesServicePaginationReq`](RolesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`RolesServicePaginationReq`](RolesServicePaginationReq.md) \| `PlainMessage`\<[`RolesServicePaginationReq`](RolesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/roles.scailo_pb.ts:1084](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1084)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RolesServicePaginationReq`](RolesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`RolesServicePaginationReq`](RolesServicePaginationReq.md)

#### Defined in

[src/roles.scailo_pb.ts:1072](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1072)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RolesServicePaginationReq`](RolesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RolesServicePaginationReq`](RolesServicePaginationReq.md)

#### Defined in

[src/roles.scailo_pb.ts:1076](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1076)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RolesServicePaginationReq`](RolesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RolesServicePaginationReq`](RolesServicePaginationReq.md)

#### Defined in

[src/roles.scailo_pb.ts:1080](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1080)
