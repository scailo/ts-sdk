[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockIssuance

# Class: StockIssuance

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.StockIssuance

## Hierarchy

- `Message`\<[`StockIssuance`](StockIssuance.md)\>

  ↳ **`StockIssuance`**

## Table of contents

### Constructors

- [constructor](StockIssuance.md#constructor)

### Properties

- [approvalMetadata](StockIssuance.md#approvalmetadata)
- [completedOn](StockIssuance.md#completedon)
- [entityUuid](StockIssuance.md#entityuuid)
- [finalRefNumber](StockIssuance.md#finalrefnumber)
- [formData](StockIssuance.md#formdata)
- [list](StockIssuance.md#list)
- [locationId](StockIssuance.md#locationid)
- [logs](StockIssuance.md#logs)
- [metadata](StockIssuance.md#metadata)
- [refFrom](StockIssuance.md#reffrom)
- [refId](StockIssuance.md#refid)
- [referenceId](StockIssuance.md#referenceid)
- [status](StockIssuance.md#status)
- [vaultFolderId](StockIssuance.md#vaultfolderid)
- [fields](StockIssuance.md#fields)
- [runtime](StockIssuance.md#runtime)
- [typeName](StockIssuance.md#typename)

### Methods

- [clone](StockIssuance.md#clone)
- [equals](StockIssuance.md#equals)
- [fromBinary](StockIssuance.md#frombinary)
- [fromJson](StockIssuance.md#fromjson)
- [fromJsonString](StockIssuance.md#fromjsonstring)
- [getType](StockIssuance.md#gettype)
- [toBinary](StockIssuance.md#tobinary)
- [toJSON](StockIssuance.md#tojson)
- [toJson](StockIssuance.md#tojson-1)
- [toJsonString](StockIssuance.md#tojsonstring)
- [equals](StockIssuance.md#equals-1)
- [fromBinary](StockIssuance.md#frombinary-1)
- [fromJson](StockIssuance.md#fromjson-1)
- [fromJsonString](StockIssuance.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuance**(`data?`): [`StockIssuance`](StockIssuance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockIssuance`](StockIssuance.md)\> |

#### Returns

[`StockIssuance`](StockIssuance.md)

#### Overrides

Message\&lt;StockIssuance\&gt;.constructor

#### Defined in

[src/stock_issuances.scailo_pb.ts:702](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L702)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/stock_issuances.scailo_pb.ts:608](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L608)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

**`Description`**

UNIX timestamp of when the record transitioned to the COMPLETED state.

**`Example`**

```ts
1698400000
```

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/stock_issuances.scailo_pb.ts:634](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L634)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/stock_issuances.scailo_pb.ts:592](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L592)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

**`Description`**

The system-generated immutable reference number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/stock_issuances.scailo_pb.ts:664](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L664)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/stock_issuances.scailo_pb.ts:700](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L700)

___

### list

• **list**: [`StockIssuanceItem`](StockIssuanceItem.md)[] = `[]`

The list of associated stock issuance items

**`Generated`**

from field: repeated Scailo.StockIssuanceItem list = 20;

#### Defined in

[src/stock_issuances.scailo_pb.ts:692](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L692)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

[src/stock_issuances.scailo_pb.ts:685](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L685)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/stock_issuances.scailo_pb.ts:624](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L624)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/stock_issuances.scailo_pb.ts:600](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L600)

___

### refFrom

• **refFrom**: [`STOCK_ISSUANCE_REF_FROM`](../enums/STOCK_ISSUANCE_REF_FROM.md) = `STOCK_ISSUANCE_REF_FROM.STOCK_ISSUANCE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.STOCK_ISSUANCE_REF_FROM ref_from = 12;

#### Defined in

[src/stock_issuances.scailo_pb.ts:671](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L671)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/stock_issuances.scailo_pb.ts:678](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L678)

___

### referenceId

• **referenceId**: `string` = `""`

**`Description`**

The user-provided reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/stock_issuances.scailo_pb.ts:654](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L654)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/stock_issuances.scailo_pb.ts:616](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L616)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Description`**

Link to the document storage folder.

**`Example`**

```ts
15234
```

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/stock_issuances.scailo_pb.ts:644](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L644)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances.scailo_pb.ts:709](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L709)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances.scailo_pb.ts:707](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L707)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockIssuance"``

#### Defined in

[src/stock_issuances.scailo_pb.ts:708](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L708)

## Methods

### clone

▸ **clone**(): [`StockIssuance`](StockIssuance.md)

Create a deep copy.

#### Returns

[`StockIssuance`](StockIssuance.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuance`](StockIssuance.md) \| `PlainMessage`\<[`StockIssuance`](StockIssuance.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockIssuance`](StockIssuance.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockIssuance`](StockIssuance.md)\>

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
| `a` | `undefined` \| [`StockIssuance`](StockIssuance.md) \| `PlainMessage`\<[`StockIssuance`](StockIssuance.md)\> |
| `b` | `undefined` \| [`StockIssuance`](StockIssuance.md) \| `PlainMessage`\<[`StockIssuance`](StockIssuance.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances.scailo_pb.ts:738](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L738)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuance`](StockIssuance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockIssuance`](StockIssuance.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:726](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L726)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuance`](StockIssuance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuance`](StockIssuance.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:730](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L730)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuance`](StockIssuance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuance`](StockIssuance.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:734](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L734)
