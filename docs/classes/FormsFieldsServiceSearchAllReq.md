[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FormsFieldsServiceSearchAllReq

# Class: FormsFieldsServiceSearchAllReq

Describes the request payload for performing a generic search operation on forms fields

**`Generated`**

from message Scailo.FormsFieldsServiceSearchAllReq

## Hierarchy

- `Message`\<[`FormsFieldsServiceSearchAllReq`](FormsFieldsServiceSearchAllReq.md)\>

  ↳ **`FormsFieldsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](FormsFieldsServiceSearchAllReq.md#constructor)

### Properties

- [count](FormsFieldsServiceSearchAllReq.md#count)
- [entityUuid](FormsFieldsServiceSearchAllReq.md#entityuuid)
- [isActive](FormsFieldsServiceSearchAllReq.md#isactive)
- [offset](FormsFieldsServiceSearchAllReq.md#offset)
- [searchKey](FormsFieldsServiceSearchAllReq.md#searchkey)
- [sectionId](FormsFieldsServiceSearchAllReq.md#sectionid)
- [sortKey](FormsFieldsServiceSearchAllReq.md#sortkey)
- [sortOrder](FormsFieldsServiceSearchAllReq.md#sortorder)
- [type](FormsFieldsServiceSearchAllReq.md#type)
- [fields](FormsFieldsServiceSearchAllReq.md#fields)
- [runtime](FormsFieldsServiceSearchAllReq.md#runtime)
- [typeName](FormsFieldsServiceSearchAllReq.md#typename)

### Methods

- [clone](FormsFieldsServiceSearchAllReq.md#clone)
- [equals](FormsFieldsServiceSearchAllReq.md#equals)
- [fromBinary](FormsFieldsServiceSearchAllReq.md#frombinary)
- [fromJson](FormsFieldsServiceSearchAllReq.md#fromjson)
- [fromJsonString](FormsFieldsServiceSearchAllReq.md#fromjsonstring)
- [getType](FormsFieldsServiceSearchAllReq.md#gettype)
- [toBinary](FormsFieldsServiceSearchAllReq.md#tobinary)
- [toJSON](FormsFieldsServiceSearchAllReq.md#tojson)
- [toJson](FormsFieldsServiceSearchAllReq.md#tojson-1)
- [toJsonString](FormsFieldsServiceSearchAllReq.md#tojsonstring)
- [equals](FormsFieldsServiceSearchAllReq.md#equals-1)
- [fromBinary](FormsFieldsServiceSearchAllReq.md#frombinary-1)
- [fromJson](FormsFieldsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](FormsFieldsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormsFieldsServiceSearchAllReq**(`data?`): [`FormsFieldsServiceSearchAllReq`](FormsFieldsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormsFieldsServiceSearchAllReq`](FormsFieldsServiceSearchAllReq.md)\> |

#### Returns

[`FormsFieldsServiceSearchAllReq`](FormsFieldsServiceSearchAllReq.md)

#### Overrides

Message\&lt;FormsFieldsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/forms_fields.scailo_pb.ts:1220](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/forms_fields.scailo_pb.ts#L1220)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/forms_fields.scailo_pb.ts:1160](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/forms_fields.scailo_pb.ts#L1160)

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

from field: string entity_uuid = 6;

#### Defined in

[src/forms_fields.scailo_pb.ts:1197](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/forms_fields.scailo_pb.ts#L1197)

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

[src/forms_fields.scailo_pb.ts:1153](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/forms_fields.scailo_pb.ts#L1153)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/forms_fields.scailo_pb.ts:1167](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/forms_fields.scailo_pb.ts#L1167)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 10;

#### Defined in

[src/forms_fields.scailo_pb.ts:1204](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/forms_fields.scailo_pb.ts#L1204)

___

### sectionId

• **sectionId**: `bigint` = `protoInt64.zero`

The ID of the corresponding form section that the form field belongs to

**`Generated`**

from field: uint64 section_id = 12;

#### Defined in

[src/forms_fields.scailo_pb.ts:1218](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/forms_fields.scailo_pb.ts#L1218)

___

### sortKey

• **sortKey**: [`FORM_FIELD_SORT_KEY`](../enums/FORM_FIELD_SORT_KEY.md) = `FORM_FIELD_SORT_KEY.FORM_FIELD_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the response

**`Generated`**

from field: Scailo.FORM_FIELD_SORT_KEY sort_key = 5;

#### Defined in

[src/forms_fields.scailo_pb.ts:1181](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/forms_fields.scailo_pb.ts#L1181)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/forms_fields.scailo_pb.ts:1174](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/forms_fields.scailo_pb.ts#L1174)

___

### type

• **type**: [`FORM_TYPE`](../enums/FORM_TYPE.md) = `FORM_TYPE.FORM_TYPE_ANY_UNSPECIFIED`

The type of the form field

**`Generated`**

from field: Scailo.FORM_TYPE type = 11;

#### Defined in

[src/forms_fields.scailo_pb.ts:1211](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/forms_fields.scailo_pb.ts#L1211)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/forms_fields.scailo_pb.ts:1227](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/forms_fields.scailo_pb.ts#L1227)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/forms_fields.scailo_pb.ts:1225](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/forms_fields.scailo_pb.ts#L1225)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormsFieldsServiceSearchAllReq"``

#### Defined in

[src/forms_fields.scailo_pb.ts:1226](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/forms_fields.scailo_pb.ts#L1226)

## Methods

### clone

▸ **clone**(): [`FormsFieldsServiceSearchAllReq`](FormsFieldsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`FormsFieldsServiceSearchAllReq`](FormsFieldsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`FormsFieldsServiceSearchAllReq`](FormsFieldsServiceSearchAllReq.md) \| `PlainMessage`\<[`FormsFieldsServiceSearchAllReq`](FormsFieldsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormsFieldsServiceSearchAllReq`](FormsFieldsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormsFieldsServiceSearchAllReq`](FormsFieldsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`FormsFieldsServiceSearchAllReq`](FormsFieldsServiceSearchAllReq.md) \| `PlainMessage`\<[`FormsFieldsServiceSearchAllReq`](FormsFieldsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`FormsFieldsServiceSearchAllReq`](FormsFieldsServiceSearchAllReq.md) \| `PlainMessage`\<[`FormsFieldsServiceSearchAllReq`](FormsFieldsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/forms_fields.scailo_pb.ts:1251](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/forms_fields.scailo_pb.ts#L1251)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormsFieldsServiceSearchAllReq`](FormsFieldsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormsFieldsServiceSearchAllReq`](FormsFieldsServiceSearchAllReq.md)

#### Defined in

[src/forms_fields.scailo_pb.ts:1239](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/forms_fields.scailo_pb.ts#L1239)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormsFieldsServiceSearchAllReq`](FormsFieldsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsFieldsServiceSearchAllReq`](FormsFieldsServiceSearchAllReq.md)

#### Defined in

[src/forms_fields.scailo_pb.ts:1243](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/forms_fields.scailo_pb.ts#L1243)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormsFieldsServiceSearchAllReq`](FormsFieldsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsFieldsServiceSearchAllReq`](FormsFieldsServiceSearchAllReq.md)

#### Defined in

[src/forms_fields.scailo_pb.ts:1247](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/forms_fields.scailo_pb.ts#L1247)
