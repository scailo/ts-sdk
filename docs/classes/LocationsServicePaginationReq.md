[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LocationsServicePaginationReq

# Class: LocationsServicePaginationReq

Pagination request for retrieving slices of Location records.

**`Generated`**

from message Scailo.LocationsServicePaginationReq

## Hierarchy

- `Message`\<[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)\>

  ↳ **`LocationsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](LocationsServicePaginationReq.md#constructor)

### Properties

- [count](LocationsServicePaginationReq.md#count)
- [isActive](LocationsServicePaginationReq.md#isactive)
- [offset](LocationsServicePaginationReq.md#offset)
- [sortKey](LocationsServicePaginationReq.md#sortkey)
- [sortOrder](LocationsServicePaginationReq.md#sortorder)
- [status](LocationsServicePaginationReq.md#status)
- [fields](LocationsServicePaginationReq.md#fields)
- [runtime](LocationsServicePaginationReq.md#runtime)
- [typeName](LocationsServicePaginationReq.md#typename)

### Methods

- [clone](LocationsServicePaginationReq.md#clone)
- [equals](LocationsServicePaginationReq.md#equals)
- [fromBinary](LocationsServicePaginationReq.md#frombinary)
- [fromJson](LocationsServicePaginationReq.md#fromjson)
- [fromJsonString](LocationsServicePaginationReq.md#fromjsonstring)
- [getType](LocationsServicePaginationReq.md#gettype)
- [toBinary](LocationsServicePaginationReq.md#tobinary)
- [toJSON](LocationsServicePaginationReq.md#tojson)
- [toJson](LocationsServicePaginationReq.md#tojson-1)
- [toJsonString](LocationsServicePaginationReq.md#tojsonstring)
- [equals](LocationsServicePaginationReq.md#equals-1)
- [fromBinary](LocationsServicePaginationReq.md#frombinary-1)
- [fromJson](LocationsServicePaginationReq.md#fromjson-1)
- [fromJsonString](LocationsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LocationsServicePaginationReq**(`data?`): [`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)\> |

#### Returns

[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

#### Overrides

Message\&lt;LocationsServicePaginationReq\&gt;.constructor

#### Defined in

[src/locations.scailo_pb.ts:726](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/locations.scailo_pb.ts#L726)

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

[src/locations.scailo_pb.ts:674](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/locations.scailo_pb.ts#L674)

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

[src/locations.scailo_pb.ts:658](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/locations.scailo_pb.ts#L658)

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

[src/locations.scailo_pb.ts:690](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/locations.scailo_pb.ts#L690)

___

### sortKey

• `Optional` **sortKey**: [`LOCATION_SORT_KEY`](../enums/LOCATION_SORT_KEY.md)

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: optional Scailo.LOCATION_SORT_KEY sort_key = 5;

#### Defined in

[src/locations.scailo_pb.ts:712](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/locations.scailo_pb.ts#L712)

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

[src/locations.scailo_pb.ts:702](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/locations.scailo_pb.ts#L702)

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

[src/locations.scailo_pb.ts:724](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/locations.scailo_pb.ts#L724)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/locations.scailo_pb.ts:733](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/locations.scailo_pb.ts#L733)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/locations.scailo_pb.ts:731](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/locations.scailo_pb.ts#L731)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LocationsServicePaginationReq"``

#### Defined in

[src/locations.scailo_pb.ts:732](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/locations.scailo_pb.ts#L732)

## Methods

### clone

▸ **clone**(): [`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LocationsServicePaginationReq`](LocationsServicePaginationReq.md) \| `PlainMessage`\<[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`LocationsServicePaginationReq`](LocationsServicePaginationReq.md) \| `PlainMessage`\<[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`LocationsServicePaginationReq`](LocationsServicePaginationReq.md) \| `PlainMessage`\<[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/locations.scailo_pb.ts:754](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/locations.scailo_pb.ts#L754)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

#### Defined in

[src/locations.scailo_pb.ts:742](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/locations.scailo_pb.ts#L742)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

#### Defined in

[src/locations.scailo_pb.ts:746](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/locations.scailo_pb.ts#L746)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

#### Defined in

[src/locations.scailo_pb.ts:750](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/locations.scailo_pb.ts#L750)
