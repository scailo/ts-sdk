[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsFamiliesServiceSearchAllReq

# Class: EquationsFamiliesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.EquationsFamiliesServiceSearchAllReq

## Hierarchy

- `Message`\<[`EquationsFamiliesServiceSearchAllReq`](EquationsFamiliesServiceSearchAllReq.md)\>

  ↳ **`EquationsFamiliesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](EquationsFamiliesServiceSearchAllReq.md#constructor)

### Properties

- [count](EquationsFamiliesServiceSearchAllReq.md#count)
- [entityUuid](EquationsFamiliesServiceSearchAllReq.md#entityuuid)
- [isActive](EquationsFamiliesServiceSearchAllReq.md#isactive)
- [offset](EquationsFamiliesServiceSearchAllReq.md#offset)
- [searchKey](EquationsFamiliesServiceSearchAllReq.md#searchkey)
- [sortKey](EquationsFamiliesServiceSearchAllReq.md#sortkey)
- [sortOrder](EquationsFamiliesServiceSearchAllReq.md#sortorder)
- [status](EquationsFamiliesServiceSearchAllReq.md#status)
- [fields](EquationsFamiliesServiceSearchAllReq.md#fields)
- [runtime](EquationsFamiliesServiceSearchAllReq.md#runtime)
- [typeName](EquationsFamiliesServiceSearchAllReq.md#typename)

### Methods

- [clone](EquationsFamiliesServiceSearchAllReq.md#clone)
- [equals](EquationsFamiliesServiceSearchAllReq.md#equals)
- [fromBinary](EquationsFamiliesServiceSearchAllReq.md#frombinary)
- [fromJson](EquationsFamiliesServiceSearchAllReq.md#fromjson)
- [fromJsonString](EquationsFamiliesServiceSearchAllReq.md#fromjsonstring)
- [getType](EquationsFamiliesServiceSearchAllReq.md#gettype)
- [toBinary](EquationsFamiliesServiceSearchAllReq.md#tobinary)
- [toJSON](EquationsFamiliesServiceSearchAllReq.md#tojson)
- [toJson](EquationsFamiliesServiceSearchAllReq.md#tojson-1)
- [toJsonString](EquationsFamiliesServiceSearchAllReq.md#tojsonstring)
- [equals](EquationsFamiliesServiceSearchAllReq.md#equals-1)
- [fromBinary](EquationsFamiliesServiceSearchAllReq.md#frombinary-1)
- [fromJson](EquationsFamiliesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](EquationsFamiliesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsFamiliesServiceSearchAllReq**(`data?`): [`EquationsFamiliesServiceSearchAllReq`](EquationsFamiliesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsFamiliesServiceSearchAllReq`](EquationsFamiliesServiceSearchAllReq.md)\> |

#### Returns

[`EquationsFamiliesServiceSearchAllReq`](EquationsFamiliesServiceSearchAllReq.md)

#### Overrides

Message\&lt;EquationsFamiliesServiceSearchAllReq\&gt;.constructor

#### Defined in

src/equations_families.scailo_pb.ts:1688

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/equations_families.scailo_pb.ts:1644

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/equations_families.scailo_pb.ts:1672

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/equations_families.scailo_pb.ts:1637

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/equations_families.scailo_pb.ts:1651

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/equations_families.scailo_pb.ts:1686

___

### sortKey

• **sortKey**: [`EQUATION_FAMILY_SORT_KEY`](../enums/EQUATION_FAMILY_SORT_KEY.md) = `EQUATION_FAMILY_SORT_KEY.EQUATION_FAMILY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.EQUATION_FAMILY_SORT_KEY sort_key = 5;

#### Defined in

src/equations_families.scailo_pb.ts:1665

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/equations_families.scailo_pb.ts:1658

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/equations_families.scailo_pb.ts:1679

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/equations_families.scailo_pb.ts:1695

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/equations_families.scailo_pb.ts:1693

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsFamiliesServiceSearchAllReq"``

#### Defined in

src/equations_families.scailo_pb.ts:1694

## Methods

### clone

▸ **clone**(): [`EquationsFamiliesServiceSearchAllReq`](EquationsFamiliesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`EquationsFamiliesServiceSearchAllReq`](EquationsFamiliesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsFamiliesServiceSearchAllReq`](EquationsFamiliesServiceSearchAllReq.md) \| `PlainMessage`\<[`EquationsFamiliesServiceSearchAllReq`](EquationsFamiliesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsFamiliesServiceSearchAllReq`](EquationsFamiliesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsFamiliesServiceSearchAllReq`](EquationsFamiliesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`EquationsFamiliesServiceSearchAllReq`](EquationsFamiliesServiceSearchAllReq.md) \| `PlainMessage`\<[`EquationsFamiliesServiceSearchAllReq`](EquationsFamiliesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`EquationsFamiliesServiceSearchAllReq`](EquationsFamiliesServiceSearchAllReq.md) \| `PlainMessage`\<[`EquationsFamiliesServiceSearchAllReq`](EquationsFamiliesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/equations_families.scailo_pb.ts:1718

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsFamiliesServiceSearchAllReq`](EquationsFamiliesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceSearchAllReq`](EquationsFamiliesServiceSearchAllReq.md)

#### Defined in

src/equations_families.scailo_pb.ts:1706

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsFamiliesServiceSearchAllReq`](EquationsFamiliesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceSearchAllReq`](EquationsFamiliesServiceSearchAllReq.md)

#### Defined in

src/equations_families.scailo_pb.ts:1710

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsFamiliesServiceSearchAllReq`](EquationsFamiliesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceSearchAllReq`](EquationsFamiliesServiceSearchAllReq.md)

#### Defined in

src/equations_families.scailo_pb.ts:1714
