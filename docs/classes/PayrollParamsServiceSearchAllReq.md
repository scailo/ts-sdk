[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PayrollParamsServiceSearchAllReq

# Class: PayrollParamsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.PayrollParamsServiceSearchAllReq

## Hierarchy

- `Message`\<[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)\>

  ↳ **`PayrollParamsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](PayrollParamsServiceSearchAllReq.md#constructor)

### Properties

- [count](PayrollParamsServiceSearchAllReq.md#count)
- [entityUuid](PayrollParamsServiceSearchAllReq.md#entityuuid)
- [isActive](PayrollParamsServiceSearchAllReq.md#isactive)
- [offset](PayrollParamsServiceSearchAllReq.md#offset)
- [searchKey](PayrollParamsServiceSearchAllReq.md#searchkey)
- [sortKey](PayrollParamsServiceSearchAllReq.md#sortkey)
- [sortOrder](PayrollParamsServiceSearchAllReq.md#sortorder)
- [status](PayrollParamsServiceSearchAllReq.md#status)
- [fields](PayrollParamsServiceSearchAllReq.md#fields)
- [runtime](PayrollParamsServiceSearchAllReq.md#runtime)
- [typeName](PayrollParamsServiceSearchAllReq.md#typename)

### Methods

- [clone](PayrollParamsServiceSearchAllReq.md#clone)
- [equals](PayrollParamsServiceSearchAllReq.md#equals)
- [fromBinary](PayrollParamsServiceSearchAllReq.md#frombinary)
- [fromJson](PayrollParamsServiceSearchAllReq.md#fromjson)
- [fromJsonString](PayrollParamsServiceSearchAllReq.md#fromjsonstring)
- [getType](PayrollParamsServiceSearchAllReq.md#gettype)
- [toBinary](PayrollParamsServiceSearchAllReq.md#tobinary)
- [toJSON](PayrollParamsServiceSearchAllReq.md#tojson)
- [toJson](PayrollParamsServiceSearchAllReq.md#tojson-1)
- [toJsonString](PayrollParamsServiceSearchAllReq.md#tojsonstring)
- [equals](PayrollParamsServiceSearchAllReq.md#equals-1)
- [fromBinary](PayrollParamsServiceSearchAllReq.md#frombinary-1)
- [fromJson](PayrollParamsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](PayrollParamsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PayrollParamsServiceSearchAllReq**(`data?`): [`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)\> |

#### Returns

[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)

#### Overrides

Message\&lt;PayrollParamsServiceSearchAllReq\&gt;.constructor

#### Defined in

src/payroll_params.scailo_pb.ts:948

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/payroll_params.scailo_pb.ts:904

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/payroll_params.scailo_pb.ts:932

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/payroll_params.scailo_pb.ts:897

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/payroll_params.scailo_pb.ts:911

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/payroll_params.scailo_pb.ts:946

___

### sortKey

• **sortKey**: [`PAYROLL_PARAM_SORT_KEY`](../enums/PAYROLL_PARAM_SORT_KEY.md) = `PAYROLL_PARAM_SORT_KEY.PAYROLL_PARAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PAYROLL_PARAM_SORT_KEY sort_key = 5;

#### Defined in

src/payroll_params.scailo_pb.ts:925

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/payroll_params.scailo_pb.ts:918

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/payroll_params.scailo_pb.ts:939

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/payroll_params.scailo_pb.ts:955

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/payroll_params.scailo_pb.ts:953

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PayrollParamsServiceSearchAllReq"``

#### Defined in

src/payroll_params.scailo_pb.ts:954

## Methods

### clone

▸ **clone**(): [`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md) \| `PlainMessage`\<[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md) \| `PlainMessage`\<[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md) \| `PlainMessage`\<[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/payroll_params.scailo_pb.ts:978

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)

#### Defined in

src/payroll_params.scailo_pb.ts:966

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)

#### Defined in

src/payroll_params.scailo_pb.ts:970

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)

#### Defined in

src/payroll_params.scailo_pb.ts:974
